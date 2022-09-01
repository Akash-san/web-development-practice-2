// let random = Math.ceil(Math.random() * 5);
// if (1 < random) {
//     console.log("THE PROCESS IS CORRECT");
// }
// function isEven(num) {
//     //WRITE YOUR CODE BETWEEN THIS LINE:
//     if (num == 6) {
//         console.log(isEven);
//     }
//     //AND THIS LINE ↑↑↑↑↑
// }
// isEven = "Even"



// const password = prompt('ENTER YOUR PASSWORD')
// if (password.length >= 8) {
//     if (password.charAt(0).toUpperCase() + password.slice(1)) {
//         console.log('DONE')
//     }
// } else {
//     console.log("ENTER PROPERLY!!")
// }
// const password = prompt('ENTER PASSWORD')
// if (password = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/") {

//     console.log('ENTER PROPERLY')
// } else {
//     console.log("CORRECT")
// }

// const password = prompt("ENTER HERE")
// if (password.length >= 8) {
//     if (password.indexOf(" ") === -1) {
//         console.log("CORRECT");
//     } else {
//         console.log("INCORRET")
//     }
//     if (password.toUpperCase() + password.slice(0)) {

//     } else {
//         console.log("UPPERCASE")
//     }
// } else {
//     console.log('TOO SHORT')
// // }

// const familyName = [
//     ["Akash", "Aswin", "SanthoashKumar", "Anitha"],
//     ["Bharath", "Vasuki", "Bubesh", "Trisha"],
//     ["Kumaran", "Punitha", "Harini", "Achu"],
// ]
// for (let i = 0; i < familyName.length; i++) {
//     const row = familyName[i];
//     console.log(`HERE IS ${i}`)
//     for (let j = 0; j <= row.length; j++) {
//         console.log(row[j]);
//     }
// }

const nameFirst = 'Akassh';
let game = prompt("ENTER GUESSING WORD PROPERLY!!");
while (game !== nameFirst) {
    game = prompt("ENTER GUESSING WORD PROPERLY!!");
}
console.log("CORRECT");




