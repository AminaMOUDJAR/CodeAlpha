var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var output = document.getElementById("output");  // Assuming there's an element with id 'output' to display the color

function Gradient(){
     var gradientString = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
     body.style.background = gradientString;
     return gradientString;
}

function displayBackgroundColor() {
    var bgColor = window.getComputedStyle(body).backgroundImage;
    output.textContent = bgColor;  // Display the color to the user
}

color1.addEventListener("input", function() {
    Gradient();
    displayBackgroundColor();
});

color2.addEventListener("input", function() {
    Gradient();
    displayBackgroundColor();
});