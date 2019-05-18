var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorButton = document.getElementById("randomColorButton"); 

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// from Stack Overflow
function randomColorGenerator()
{	return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6); }

function setRandomColors(){
	color1.value = randomColorGenerator();
	color2.value = randomColorGenerator();

	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColorButton.addEventListener("click", setRandomColors);



