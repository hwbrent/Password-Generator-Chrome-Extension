const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">",".","?","/","]"];

function randomLetter () {
    const ind = Math.floor(Math.random() * alphabet.length);
    const letter = alphabet[ind];

    if ((Math.floor(Math.random() * 2)) === 0) return letter
    else return letter.toUpperCase();
}

function randomSymbol () {
    const ind = Math.floor(Math.random() * symbols.length);
    return symbols[ind];
}

function generatePassword () {
    let count = 0;
    let out = "";
    const desired_length = document.getElementById("length").value;

    if (document.getElementById("symbols").checked === true) {
        while (count < desired_length) {
            const decider = Math.floor(Math.random() * 2);
            if (decider === 0) {
                const letter = randomLetter();
                out += letter;
            } else {
                const number = Math.floor(Math.random() * 10)
                out += number.toString();
            }
            count += 1;
        }
    } else {
        while (count < desired_length) {
            const decider = Math.floor(Math.random() * 3);
            if (decider === 0) {
                const letter = randomLetter();
                out += letter;
            } else if (decider == 1) {
                const number = Math.floor(Math.random() * 10);
                out += number.toString();
            } else {
                const symbol = randomSymbol();
                out += symbol;
            }
            count += 1;
        }
    }
    document.getElementById("result").innerHTML = out;
    console.log(out);
};

document.getElementById("submit").addEventListener('click', function (event) {
    event.preventDefault();
    generatePassword();
});