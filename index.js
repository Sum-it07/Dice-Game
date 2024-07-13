var num1=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").src="./images/dice" + num1 + ".png";
document.querySelector(".img2").src="./images/dice" + num2 + ".png";

if(num1>num2){
    document.querySelector("h1").textContent="Player 1 wins!";
} else if(num1<num2){
    document.querySelector("h1").textContent="Player 2 wins!";
}