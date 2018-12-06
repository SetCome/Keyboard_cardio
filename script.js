//napisz funkcje która generuje losowa liczbę (zwraca liczbę całkowitą), zwraca jak argumenty przyjmuje 
//min (minimalna wartość) oraz max (maxymalna liczba do wygenerowania)

const buttonsKey = document.getElementsByClassName('key');
let lastKey;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index]; 
    if (key === lastKey){
        console.log('the same key!!!');
        return getRandomKey();
    }
    lastKey = key;
    return key;
};

console.log(getRandomKey())


// do domu napisz funkcje ktora losowa dodaje do klawisza klase fire-key