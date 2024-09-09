
let logo;
let font;
let score = 0;
const DOTSPACING = 70;

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

    drawLines();
    drawDots();

    drawScore();
}

function drawScore() {
    textFont(font);
    textSize(30);
    fill("#FFFFFF");
    text("HIGH SCORE " + score, 50, height - 50);
}

function drawLines() {
    stroke("#1436FF");
    strokeWeight(7);
    line(0, 300, width, 300);
    line(0, 320, width, 320);
    line(0, 540, width, 540);
    line(0, 560, width, 560);
}

function drawDots() {
    noStroke();
    fill("#FFFFaa");
    for(let i = 0; i < width; i += DOTSPACING) {
        rect(i, 415, 25, 25);
    }
}