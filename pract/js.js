function clickkrug() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var wid = getRandomInt(500);
    var hei = getRandomInt(500);
    var bor = getRandomInt(10)
    var br = getRandomInt(100)
    var deg =getRandomInt(360)
    

   
 
   
    console.log ("#clickkrug", red, green, blue, wid, hei,bor, deg);

 
    var stringBoxShadow = "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)"
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 400px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)";

    document.getElementById("krug").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("krug").style.width = wid + "px";
    document.getElementById("krug").style.height = hei + "px";
    document.getElementById("krug").style.border = bor + "px solid" + "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("krug").style.borderRadius = br + "px";
    document.getElementById("krug").style.borderRadius = br + "px";
    document.getElementById("krug").style.transform = "rotate(" + deg +"deg)";
    document.getElementById("krug").style.boxShadow = stringBoxShadow;
  
        
        
        
      
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

