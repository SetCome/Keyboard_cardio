//napisz funkcje która generuje losowa liczbę (zwraca liczbę całkowitą), zwraca jak argumenty przyjmuje 
//min (minimalna wartość) oraz max (maxymalna liczba do wygenerowania)

const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let OffGame = false;
let currentkey;
let score;
let endScore = 2;

console.log(currentkey.attributes[0].value)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey) {
        console.log('The same key!!!')
        return getRandomKey()
    }
    lastKey = key;
    return key;
};


console.log(getRandomKey())

// do domu napisz funkcję która losowo dodaje do klawisza klasę fire-key

function peep(){
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    key.classList.add('fire-key');
    currentkey = key;
    // console.log(currentkey.attributes[0].value)
    setTimeout(() => {
       key.classList.remove('fire-key')
        if (!OffGame) peep();
    }, time);
};

function endGame() {
    OffGame = true;
};

function startGame() {
    score = 0;
    window.addEventListener('keydown', checkKey)
    peep();
    offGame = false;
};

function checkKey(event){
    if (event.keyCode == currentkey.attributes[0].value) {
        score ++;
        console.log(score);
    } else {
        score --;
        console.log(score);
    }
    if (score == endScore) {
        endGame
    }
};


