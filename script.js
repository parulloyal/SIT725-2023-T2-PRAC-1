function changeText() {
let potentialTexts = ['Text 1','Text 2','Text 3','Text 4','Text5'];
let number = getRandomNumber(0, potentialTexts.length - 1);
console.log(number);
let textToChangeTo = potentialTexts[number];
document.getElementById('heading').innerHTML = textToChangeTo;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}