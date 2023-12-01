// Function to perform LSB steganography to hide a message within an image
function lsbencodeMessage() {
    const message = document.getElementById('message').value;
    const imageFile = document.getElementById('image1').files[0];
    lsbProcessImage(imageFile, message);
}

// Function to perform LSB steganography to hide an image within another image
function xorHideImage(image1, image2) {
    // Check if image1 is not an HTMLImageElement
    if (!(image1 instanceof HTMLImageElement)) {
        // Create a new Image object and set its src property
        const tempImg = new Image();
        tempImg.src = URL.createObjectURL(image1); // assuming image1 is a File object
        image1 = tempImg;
    }

    // Check if image2 is not an HTMLImageElement
    if (!(image2 instanceof HTMLImageElement)) {
        // Create a new Image object and set its src property
        const tempImg = new Image();
        tempImg.src = URL.createObjectURL(image2); // assuming image2 is a File object
        image2 = tempImg;
    }

    // Ensure both images have been fully loaded
    if (!image1.complete || !image2.complete) {
        // If not, set up onload event handlers to wait for the images to load
        image1.onload = function () {
            if (image2.complete) {
                continueXorSteganography(image1, image2);
            }
        };

        image2.onload = function () {
            if (image1.complete) {
                continueXorSteganography(image1, image2);
            }
        };

        return;
    }

    // Ensure both images have the same dimensions
    if (image1.width !== image2.width || image1.height !== image2.height) {
        console.error("Images must have the same dimensions.");
        return;
    }

    // Perform XOR steganography
    continueXorSteganography(image1, image2);
}


// Function to continue steganography when images are fully loaded
function continueXorSteganography(image1, image2) {
    // Ensure both images have the same dimensions
    if (image1.width !== image2.width || image1.height !== image2.height) {
        console.error("Images must have the same dimensions.");
        return;
    }

    // Create a canvas with dimensions accommodating both images
    const canvas = document.createElement('canvas');
    canvas.width = image1.width;
    canvas.height = image1.height;
    const ctx = canvas.getContext('2d');

    // Draw the fully loaded image1 on the canvas
    ctx.drawImage(image1, 0, 0);

    const imageData1 = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Draw the fully loaded image2 on the canvas
    ctx.drawImage(image2, 0, 0);

    const imageData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Loop through each pixel
    for (let i = 0; i < imageData1.data.length; i += 4) {
        // XOR operation on each channel separately
        imageData1.data[i] ^= imageData2.data[i];
        imageData1.data[i + 1] ^= imageData2.data[i + 1];
        imageData1.data[i + 2] ^= imageData2.data[i + 2];
        // Ensure the alpha channel remains unchanged
        imageData1.data[i + 3] = imageData1.data[i + 3];
    }

    // Create a new image with XORed data
    ctx.putImageData(imageData1, 0, 0);
    const xoredImage = canvas.toDataURL('image/png');
    downloadImage(xoredImage);
}

function hideImage(originalImage, imageToHide) {
    // Check if originalImage is not an HTMLImageElement
    if (!(originalImage instanceof HTMLImageElement)) {
        // Create a new Image object and set its src property
        const tempImg = new Image();
        tempImg.src = originalImage.src; // assuming originalImage has a src property
        originalImage = tempImg;
    }
}

// Function to perform LSB steganography to hide an image within another image
function lsbdecodeMessage() {
    const imageFile = document.getElementById('image1').files[0];
    lsbProcessImage(imageFile, null, true);
}

// Function to perform LSB steganography to hide an image within another image
function lsbProcessImage(imageFile, message, isDecode = false) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.getElementById('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            if (isDecode) {
                const decodedMessage = lsbdecode(ctx, img.width, img.height);
                document.getElementById('decodedMessage').innerText = decodedMessage;
            } else {
                lsbencode(ctx, img.width, img.height, message);
            }
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(imageFile);
}

// Function to perform LSB encoding
function lsbencode(ctx, width, height, message) {
    const binaryMessage = toBinary(message);
    let dataIndex = 0;
    const imageData = ctx.getImageData(0, 0, width, height);

    // Loop through each pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
        if (dataIndex < binaryMessage.length) {
            imageData.data[i] = setLSB(imageData.data[i], binaryMessage[dataIndex++]); // Red channel set the LSB
            if (dataIndex < binaryMessage.length) {
                imageData.data[i + 1] = setLSB(imageData.data[i + 1], binaryMessage[dataIndex++]); // Green channel
            }
            if (dataIndex < binaryMessage.length) {
                imageData.data[i + 2] = setLSB(imageData.data[i + 2], binaryMessage[dataIndex++]); // Blue channel
            }
        } else { // Add a non-plaintext character after the message is done (easier to decode)
            break;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    downloadImage(canvas.toDataURL('image/png'));
}

// Function to perform LSB decoding
function lsbdecode(ctx, width, height) {
    const imageData = ctx.getImageData(0, 0, width, height);
    let binaryMessage = '';
    let decodedString = '';

    for (let i = 0; i < imageData.data.length; i += 4) {
        if (binaryMessage.length >= 8) {
            const character = fromBinary(binaryMessage.slice(0, 8));
            if (!isPrintable(character)) {
                break;
            }
            decodedString += character;
            binaryMessage = binaryMessage.slice(8);
        }
        binaryMessage += getLSB(imageData.data[i]);   // Red channel
        binaryMessage += getLSB(imageData.data[i + 1]); // Green channel
        binaryMessage += getLSB(imageData.data[i + 2]); // Blue channel
    }

    // Process any remaining bits in case the loop ends with a partial character
    if (binaryMessage.length >= 8) {
        const character = fromBinary(binaryMessage.slice(0, 8));
        if (isPrintable(character)) {
            decodedString += character;
        }
    }

    return decodedString;
}

// Function to check if a character is printable
function isPrintable(character) {
    const charCode = character.charCodeAt(0);
    return charCode >= 32 && charCode <= 126; // Printable ASCII range
}

// Function to get the LSB of a pixel
function getLSB(pixel) {
    return pixel & 0x1;
}

// Function to convert binary string to string
function fromBinary(binaryString) {
    let string = '';
    for (let i = 0; i < binaryString.length; i += 8) {
        let byte = binaryString.slice(i, i + 8);
        string += String.fromCharCode(parseInt(byte, 2));
    }
    return string;
}

// Function to set the LSB of a pixel
function setLSB(pixel, bit) {
    return (pixel & 0xFE) | bit;
}

// Function to convert string to binary string
function toBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
}

// Function to download the image
function downloadImage(dataUrl) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'encoded-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Accessing the form
const stegoForm = document.getElementById('stegoForm');

let selectedValue = "lsb"; // Initialize as LSB

// Handling form submission
stegoForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Accessing the selected value from the dropdown
    const selectedValue = document.getElementById('stegotype').value;

    // Do something with the selected value (for example, display it)
    console.log('Selected value:', selectedValue);

    // You can add your logic here based on the selected value
    // For example, perform different actions based on the selected steganography type
});

function encodeMessage() {
    selectedValue = document.getElementById('stegotype').value;
    if (selectedValue == "lsb") {
        lsbencodeMessage();
        console.log("Did it work?");
    } else if (selectedValue == "xor") {
        var image1 = document.getElementById('image1').files[0];
        var image2 = document.getElementById('image2').files[0];

        // Check if both files are selected before calling hideImage
        if (image1 && image2) {
            xorHideImage(image1, image2);
        } else {
            console.error("Please select both images for XOR steganography.");
        }
    } else if (selectedValue == "msb") {
        // Handle MSB steganography
    }
}
function decodeMessage() {
    selectedValue = document.getElementById('stegotype').value;
    if (selectedValue == "lsb") {
        lsbdecodeMessage();
        console.log("did it work?")
    }
    else if (selectedValue == "xor") {
        var image1 = document.getElementById('image1').files[0];
        var image2 = document.getElementById('image2').files[0];

        // Check if both files are selected before calling hideImage
        if (image1 && image2) {
            xorHideImage(image1, image2);
        } else {
            console.error("Please select both images for XOR steganography.");
        }
    }
    else if (selectedValue == "msb") {

    }
}