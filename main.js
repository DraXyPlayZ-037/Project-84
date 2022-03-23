// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

hi = "hi"
img_width = 1200;
img_height = 300;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    img_imgTag = new Image(); //defining a variable with a new image
    img_imgTag.onload = uploadimg; // setting a function, onloading this variable
    img_imgTag.src = img_image; // load image
}

function uploadimg() {

    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed >= '65' && keyPressed <= '90') {
        aplhabetkey();
        document.getElementById("d1").innerHTML = "You pressed an Alphabet key";

    }
    if ((keyPressed >= '48' && keyPressed <= '57') || (keyPressed >= '96' && keyPressed <= '105')) {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a Number key";
    }

    if (keyPressed >= '37' && keyPressed <= '40') {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an Arrow key";

    }

    if ((keyPressed >= '17' && keyPressed <= '18') || (keyPressed >= '27' && keyPressed <= '27')) {
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a Special key";
    }

    if ((keyPressed == '13') || (keyPressed == '16') || (keyPressed == '46')) {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed an Other key";
    }
















}

function aplhabetkey() {
    img_image = "Alpkey.png";
    console.log("Alphabet Has Been Clicked!");
    add();
}

function numberkey() {
    img_image = "numkey.png";
    console.log("Number Has Been Clicked!");
    add();
}

function arrowkey() {
    img_image = "Arrkey.png";
    console.log("Arrow key Has Been Clicked!");
    add();
}

function specialkey() {
    img_image = "spkey.png";
    console.log("Special key Has Been Clicked!");
    add();
}

function otherkey() {
    img_image = "otherkey.png";
    console.log("Other Has Been Clicked!");
    add();
}