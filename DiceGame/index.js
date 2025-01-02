var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

document.querySelector(".img1").setAttribute("src","./dice"+randomNumber1+".png");

document.querySelector(".img2").setAttribute("src","./dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player1 WIns!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player2 WIns!";
} else {
    document.querySelector("h1").innerHTML= "Draw!";
}