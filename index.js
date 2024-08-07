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
const redo = document.getElementById("redo");
const redoBox = document.getElementById("redo-box");

textChoice.textContent = textList[Math.floor(random())];
var size = textChoice.textContent.length
var count = 0;

input.addEventListener("keydown", textCheck);

function textCheck(e) {

    var key = `${e.code}`;
    key = checkType(key);
    key = key.toLowerCase();

    if (count >= size - 1 && key == textChoice.textContent[count]) {
        log.textContent = 'Success';
        input.disabled = true;
        redoBox.style.visibility = 'visible';
    } else if (key !== textChoice.textContent[count]) {
        log.textContent = 'Fail';
        input.disabled = true;
        redoBox.style.visibility = 'visible';
    } else {
        log.textContent += '-';
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

function reset() {
    textChoice.textContent = textList[Math.floor(random())];
    size = textChoice.textContent.length;
    count = 0;
    log.textContent = '';
    input.value = "";
    input.disabled = false;
    redo.checked = false;
    redoBox.style.visibility = 'hidden';
}

function random() {
    return Math.random() * 10;
}