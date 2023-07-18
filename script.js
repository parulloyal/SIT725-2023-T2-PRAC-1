function changeText() {
    let textsArray = ['Text 1','Text 2','Text 3','Text 4','Text5'];
    let number = getRandomNumber(0, textsArray.length - 1);
    console.log(number);
    document.getElementById('heading').innerHTML = textsArray[number];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}