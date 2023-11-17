let buttonsum = document.getElementById("convertsum");
let buttonmin = document.getElementById("convertmin");
let buttonumn = document.getElementById("convertumn");
let buttondel = document.getElementById("convertdel");
let inputone = document.getElementById("numberone");
let inputtwo = document.getElementById("numbertwo");
let output = document.getElementById("result");

function printsum() {
    inputone = Number(inputone.value);
    inputtwo = Number(inputtwo.value);
    let result = inputone + inputtwo;
    output.value = result;
}
function printmin() {
    inputone = Number(inputone.value);
    inputtwo = Number(inputtwo.value);
    let result = inputone - inputtwo;
    output.value = result;
}
function printumn() {
    inputone = Number(inputone.value);
    inputtwo = Number(inputtwo.value);
    let result = inputone * inputtwo;
    output.value = result;
}
function printdel() {
    inputone = Number(inputone.value);
    inputtwo = Number(inputtwo.value);
    let result = inputone / inputtwo;
    output.value = result;
}

buttonsum.addEventListener("click", printsum);
buttonmin.addEventListener("click", printmin);
buttonumn.addEventListener("click", printumn);
buttondel.addEventListener("click", printdel);