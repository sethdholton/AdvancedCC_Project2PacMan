
let logo;
let font;

function preload(){
    logo = loadImage("assets/logo.png");
    font = loadFont("assets/emulogic.ttf");
}


function setup() {
    createCanvas(1280,700);
}

function draw() {
    background(0);
    Image(logo, width / 2 - 450, 20);

    drawScore();
}

function score() {
    textFont(font);
    textSize(30);
    text("HIGH SCORE " + score, height - 50);
}