const textList = ["the quick brown fox jumps over the lazy dog", 
    "the view from the lighthouse excited even the most seasoned traveler",
    "she opened up her third bottle of wine of the night",
    "the underground bunker was filled with chips and candy",
    "the ants enjoyed the barbecue more than the family",
    "the toy brought back fond memories of being lost in the rain forest",
    "nothing is as cautiously cuddly as a pet porcupine",
    "the bug was having an excellent day until he hit the windshield",
    "her life in the confines of the house became her new normal",
    "they improved dramatically once the lead singer left"];

const textChoice = document.getElementById("prompt");
const input = document.getElementById("typing");
const log = document.getElementById("log");
const resets = document.getElementById("reset");
const resetBox = document.getElementById("reset-box");
const redos = document.getElementById("redo");
const redoBox = document.getElementById("redo-box");

textChoice.textContent = textList[Math.floor(random())];
var size = textChoice.textContent.length;
var count = 0;
var seconds = 0;
var miliseconds = 0;
var timeInterval;

input.addEventListener("keydown", textCheck);

function textCheck(e) {
    var key = `${e.code}`;
    key = checkType(key);
    key = key.toLowerCase();

    if (count >= size - 1 && key == textChoice.textContent[count]) {
        pauseTimer();
        log.textContent = 'Success - ' + log.textContent;
        tryAgain();
    } else if (key !== textChoice.textContent[count]) {
        pauseTimer();
        log.textContent = 'Fail';
        tryAgain();
    } else {
        count++;
    }
}

function checkType(key) {
    if (key[0] == 'K') {
        return key[3];
    } else if (key[0] == 'D') {
        return key[5];
    } else if (key == 'Space'){
        return ' ';
    } else {
        return '';
    }
}

function tryAgain() {
    input.disabled = true;
    resetBox.style.visibility = 'visible';
    redoBox.style.visibility = 'visible';
}

function newTP() {
    textChoice.textContent = textList[Math.floor(random())];
    size = textChoice.textContent.length;
    reset();
}

function reset() {
    seconds = 0;
    miliseconds = 0;
    count = 0;
    log.textContent = '0s';
    input.value = '';
    input.disabled = false;
    redos.checked = false;
    resets.checked = false;
    redoBox.style.visibility = 'hidden';
    resetBox.style.visibility = 'hidden';
}

function beginTimer() {
    timeInterval = setInterval(setTime, 10);
}

function setTime() {
    ++miliseconds;
    if (miliseconds == 100) {
        ++seconds;
        miliseconds = 0;
    }
    log.textContent = seconds + '.' + miliseconds + 's';
}

function pauseTimer() {
    clearInterval(timeInterval);
}

function random() {
    return Math.random() * 10;
}