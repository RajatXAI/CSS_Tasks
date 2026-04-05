const p = document.querySelector('p');
const text = p.textContent;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const charsArray = characters.split("");

let iteration = 0;

const interval = setInterval(() => {
    const str = text.split("").map((char, index) => {
        if(index <= Math.floor(iteration)){
            return char;
        }

        return charsArray[Math.floor(Math.random() * charsArray.length)];
    }).join("");

    p.textContent = str;
    iteration += 0.25;

    if(iteration >= text.length){
        clearInterval(interval);
    }

}, 30);