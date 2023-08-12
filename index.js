var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var firstImageSrc1="./images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",firstImageSrc1);

var firstImageSrc2="./images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",firstImageSrc2);

var h1 = document.querySelector("h1");
if(randomNumber1 > randomNumber2)
{
    h1.innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 === randomNumber2)
{
    h1.innerHTML = "🚩Draw!🚩";
}
else
{
    h1.innerHTML = "Player 2 Wins!🚩";
}