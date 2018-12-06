//napisz funkcje która generuje losowa liczbę (zwraca liczbę całkowitą), zwraca jak argumenty przyjmuje 
//min (minimalna wartość) oraz max (maxymalna liczba do wygenerowania)

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};