// Ceasar Cipher

/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let cipher = '';
    for (let letter in str) {
        let letterIndex = alphabet.indexOf(str[letter]);
        if (alphabet.includes(str[letter])) {
            cipher += (letterIndex + 13) > 25
                ? alphabet[(letterIndex + 12) % 25]
                : alphabet[letterIndex + 13];
        } else {
            cipher += str[letter];
        }
    }
    return cipher;
}

rot13("SERR PBQR PNZC");