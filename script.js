// let x = Math.floor(Math.random() * 10);

// let t = true;
// while (t) {
//   let userInput = prompt("enter your number between(0-9)");
//   let num = Number(userInput);
//   if (num == x) {
//     alert("congratulations you enter the  Correct number ---- 😊");
//     t=false;
//   } else {
//     alert("Wrong number try again");
//   }

// }

let randomNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber);

function check() {
    let userInput = document.querySelector("#userInput").value;

    let msg = document.querySelector(".msg");

    let integer = Number(userInput);

    if (randomNumber === integer) {
        msg.textContent = "🎉 Correct! You guessed the number.";
        msg.style.color = "blue";
        resetGame();
    } else {
        msg.textContent = "❌ Wrong! Try again.";
        msg.style.color = "red";
    }
}
function resetGame() {
    randomNumber = Math.floor(Math.random() * 10);

    document.getElementById("userInput").value = "";
}
