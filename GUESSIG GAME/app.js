let maximum = parseInt(prompt("ENTER A MAX NUMBER!!!!"));
while (!maximum) {
    maximum = parseInt(prompt("ENTER A VAILD NUM"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("ENTER A GUESSING NUMBER"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("NUMBER IS TOOO HIGH!!");
    } else {
        guess = prompt("NUMBER IS TOOO LOW!!!!!");
    }
}
if (guess === "q") {
    console.log('I QUIT')
} else {
    // console.log(targetNum)
    console.log(`YOU HAV GOT IT AT,  ${attempts}th ATTEMPT`);
}


