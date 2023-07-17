var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randImg1 = "./images/dice" + randomNumber1.toString() + ".png";
var randImg2 = "./images/dice" + randomNumber2.toString() + ".png";

document.querySelector(".img1").setAttribute("src", randImg1);
document.querySelector(".img2").setAttribute("src", randImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins🚩";
} else {
  document.querySelector("h1").innerText = "Draw";
}
