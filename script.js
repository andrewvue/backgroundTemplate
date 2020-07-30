
var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3))

var color1 = document.querySelector(".color1"); // Using a querySelector, Just like CSS we use the .class selector
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient"); //This is to target the body tag that has the ID: gradient

function setGradient(){
body.style.background =
	"linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")"; //This is telling JS to target the body 
												//and change the background color to the values color1 and color2
	css.textContent = body.style.background + ";";

}	


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);