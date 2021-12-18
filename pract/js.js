function clickkrug() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var deg = getRandomInt(360);
    console.log ("#clickkrug", red, green, blue, deg);
    var width = getRandomInt (200)

    var stringBoxShadow = "0 0 5px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 0.5)";

    document.getElementById("krug").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("krug").style.boxShadow = stringBoxShadow;
    document.getElementById("krug").style.width =
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}