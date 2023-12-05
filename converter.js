function binToText(binary){
    const arr = binary.split(" ");
    // console.log(arr);
    var text = "";
    for(let i = 0; i < arr.length; i++) {
        let bin = parseInt(arr[i],2);
        text += String.fromCharCode(bin);
    }
    return text;
}
function textToBin(text){
    const arr = text.split("");
    var bin = "";
    for(let i = 0; i < arr.length; i++){
        let num = arr[i].charCodeAt(0);
        let temp = num.toString(2) + " ";
        for(let k = temp.length-1; k < 8; k++){
            temp = "0" + temp;
        }
        bin += temp;
        // console.log(num);
    }
    return bin;
}
console.log(binToText("01001000 01100101 01101100 01101100 01101111 00101100 00100000 01010111 01101111 01110010 01101100 01100100 00100001"));
console.log(textToBin("Hello, World!"));
