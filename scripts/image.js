function encodeMessage() {
    const message = document.getElementById('message').value;
    const imageFile = document.getElementById('uploadImage').files[0];
    processImage(imageFile, message);
}

function decodeMessage() {
    const imageFile = document.getElementById('uploadImage').files[0];
    processImage(imageFile, null, true);
}

function processImage(imageFile, message, isDecode = false) {
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
                const decodedMessage = decode(ctx, img.width, img.height);
                document.getElementById('decodedMessage').innerText = decodedMessage;
            } else {
                encode(ctx, img.width, img.height, message);
            }
        }
        img.src = event.target.result;
    };
    reader.readAsDataURL(imageFile);
}

function encode(ctx, width, height, message) {
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
}


function setLSB(pixel, bit) {
    return (pixel & 0xFE) | bit;
}


function toBinary(string) {
    return string.split('').map(function(char) {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
}
