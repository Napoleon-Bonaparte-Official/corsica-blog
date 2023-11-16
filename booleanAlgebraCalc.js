function getTrue(expression,variables){
    let A = true;
    let B = true;
    console.log(eval(expression))
}
console.log(getTrue("A+!B",["A","B"]));