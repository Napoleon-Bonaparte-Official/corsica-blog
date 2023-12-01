function lsbencodeMessage() {
    const message = document.getElementById('message').value;
    const imageFile = document.getElementById('image1').files[0];
    lsbProcessImage(imageFile, message);
}

function lsbdecodeMessage() {
    const imageFile = document.getElementById('image1').files[0];
    lsbProcessImage(imageFile, null, true);
}

function lsbProcessImage(imageFile, message, isDecode = false) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.getElementById('canvas');
            canvas.widt = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            if (isDecode) {
                const decodedMessage = lsbdecode(ctx, img.width, img.height);
                document.getElementById('decodedMessage').innerText = decodedMessage;
            } else {
                lsbencode(ctx, img.width, img.height, message);
            }
        }
        img.src = event.target.result;
    };
    reader.readAsDataURL(imageFile);
}

function lsbencode(ctx, width, height, message) {
    const binaryMessage = toBinary(message);
    let dataIndex = 0;
    const imageData = ctx.getImageData(0, 0, width, height);
    // There are 3 bytes per pixel and 
    for (let i = 0; i < imageData.data.length; i += 4) {
        if (dataIndex < binaryMessage.length) {
            imageData.data[i] = setLSB(imageData.data[i], binaryMessage[dataIndex++]); // Red channel set the LSB
            if (dataIndex < binaryMessage.length) {1
                imageData.data[i+1] = setLSB(imageData.data[i+1], binaryMessage[dataIndex++]); // Green channel
            }
            if (dataIndex < binaryMessage.length) {
                imageData.data[i+2] = setLSB(imageData.data[i+2], binaryMessage[dataIndex++]); // Blue channel
            }
        } else { // ADD A NON PLAINTEXT CHARACTER AFTER MESSAGE IS DONE !! (EASIER TO DECODE)
            break;
        }
    }
    
    ctx.putImageData(imageData, 0, 0);
    downloadImage(canvas.toDataURL('image/png'));
}

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
        binaryMessage += getLSB(imageData.data[i+1]); // Green channel
        binaryMessage += getLSB(imageData.data[i+2]); // Blue channel
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

function isPrintable(character) {
    const charCode = character.charCodeAt(0);
    return charCode >= 32 && charCode <= 126; // Printable ASCII range
}

function getLSB(pixel) {
    return pixel & 0x1;
}

function fromBinary(binaryString) {
    let string = '';
    for (let i = 0; i < binaryString.length; i += 8) {
        let byte = binaryString.slice(i, i+8);
        string += String.fromCharCode(parseInt(byte, 2));
    }
    return string;
}



function setLSB(pixel, bit) {
    return (pixel & 0xFE) | bit;
}


function toBinary(string) {
    return string.split('').map(function(char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
}


function downloadImage(dataUrl) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'encoded-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Function to perform LSB steganography to hide an image within another image
function hideImage(originalImage, imageToHide) {
    // Ensure both images have the same dimensions
    if (originalImage.width !== imageToHide.width || originalImage.height !== imageToHide.height) {
        console.error("Images must have the same dimensions.");
        return null;
    }

    const canvas = document.createElement('canvas');
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;

    const ctx = canvas.getContext('2d');
    console.log(typeof originalImage)
    ctx.drawImage(originalImage, 0, 0);
    const originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    ctx.drawImage(imageToHide, 0, 0);
    const imageToHideData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Loop through each pixel
    for (let i = 0; i < originalImageData.data.length; i += 4) {
        // Extract LSBs of each color channel
        const rOriginalLSB = originalImageData.data[i] & 1;
        const gOriginalLSB = originalImageData.data[i + 1] & 1;
        const bOriginalLSB = originalImageData.data[i + 2] & 1;

        const rHiddenLSB = imageToHideData.data[i] & 1;
        const gHiddenLSB = imageToHideData.data[i + 1] & 1;
        const bHiddenLSB = imageToHideData.data[i + 2] & 1;

        // Perform XOR operation on LSBs and replace in original image
        originalImageData.data[i] ^= rHiddenLSB;
        originalImageData.data[i + 1] ^= gHiddenLSB;
        originalImageData.data[i + 2] ^= bHiddenLSB;

        // Ensure the alpha channel remains unchanged
        originalImageData.data[i + 3] = originalImageData.data[i + 3];
    }

    // Create new image with hidden data
    ctx.putImageData(originalImageData, 0, 0);
    const hiddenImage = canvas.toDataURL();
    download(hiddenImage);
}

// Function to retrieve the two hidden images from the steganographic image
function retrieveTwoHiddenImages(steganographicImage) {
    const canvas = document.createElement('canvas');
    canvas.width = steganographicImage.width;
    canvas.height = steganographicImage.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(steganographicImage, 0, 0);
    const steganographicImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const extractedImage1 = ctx.createImageData(canvas.width, canvas.height);
    const extractedImage2 = ctx.createImageData(canvas.width, canvas.height);

    // Loop through each pixel
    for (let i = 0; i < steganographicImageData.data.length; i += 4) {
        // Extract LSBs of each color channel from steganographic image
        const rSteganographicLSB = steganographicImageData.data[i] & 1;
        const gSteganographicLSB = steganographicImageData.data[i + 1] & 1;
        const bSteganographicLSB = steganographicImageData.data[i + 2] & 1;

        // Store LSBs in corresponding extracted images by alternating pixels
        if ((i / 4) % 2 === 0) {
            extractedImage1.data[i] = rSteganographicLSB;
            extractedImage1.data[i + 1] = gSteganographicLSB;
            extractedImage1.data[i + 2] = bSteganographicLSB;
            extractedImage1.data[i + 3] = steganographicImageData.data[i + 3];
        } else {
            extractedImage2.data[i] = rSteganographicLSB;
            extractedImage2.data[i + 1] = gSteganographicLSB;
            extractedImage2.data[i + 2] = bSteganographicLSB;
            extractedImage2.data[i + 3] = steganographicImageData.data[i + 3];
        }
    }

    // Create Image objects for the extracted images
    ctx.putImageData(extractedImage1, 0, 0);
    ctx.putImageData(extractedImage2, 0, 0);

    const extractedImageObject1 = new Image();
    const extractedImageObject2 = new Image();

    extractedImageObject1.src = canvas.toDataURL();
    extractedImageObject2.src = canvas.toDataURL();

    return [extractedImageObject1, extractedImageObject2];
}

// Usage example:
// Assuming 'steganographicImage' is the Image object representing the XOR'ed image containing two hidden images
// To retrieve the two hidden images:
// const extractedImages = retrieveTwoHiddenImages(steganographicImage);
// const extractedImage1 = extractedImages[0];
// const extractedImage2 = extractedImages[1];



// Accessing the form
const stegoForm = document.getElementById('stegoForm');

let selectedValue = "lsb"; // Initialize as LSB

// Handling form submission
stegoForm.addEventListener('submit', function(event) {
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
        console.log("did it work?")
    }
    else if (selectedValue == "xor") {
        var image1 = document.getElementById('image1').files[0];
        var image2 = document.getElementById('image2').files[0];
        hideImage(image1, image2);
    }
    else if (selectedValue == "msb") {

    }
}
function decodeMessage() {
    selectedValue = document.getElementById('stegotype').value;
    if (selectedValue == "lsb") {
        lsbdecodeMessage();
        console.log("did it work?")
    }
    else if (selectedValue == "xor") {
        console.log("poggers xor moment")
    }
    else if (selectedValue == "msb") {

    }
}