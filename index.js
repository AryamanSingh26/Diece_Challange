

var image1=Math.floor(Math.random()*6)+1;
var how = "images/dice" + image1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", how);

var image2=Math.floor(Math.random()*6)+1;
var ho = "images/dice" + image2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ho);

if (how > ho) {
  document.querySelector("h1").innerHTML= "player 1 wins";
}
else if (ho>how) {
  document.querySelector('h1').innerHTML="player 2 wins";
}
else {
  document.querySelector('h1').innerHTML= "Draw";
}
