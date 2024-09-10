
let logo;
let pacmanImg, pacmanLeftImg, pacmanRightImg;
let font;
let score = 0;
const DOTSPACING = 70;

let pacmanX = 50;
let direction = 1;

let dots = [];

function preload(){
    logo = loadImage("assets/logo.png");
    font = loadFont("assets/emulogic.ttf");
    pacmanImg = loadImage("assets/pacman.png");
    pacmanLeftImg = loadImage("assets/pacmanleft.png");
    pacmanRightImg = loadImage("assets/pacmanright.png");
}


function setup() {
    createCanvas(1280,700);

    for(let i = 0; i ; i += DOTSPACING) {
        let dot = new Dot(i);
        dots.push(dot);
    }
}

function draw() {
    background(0);
    image(logo, width / 2 - 450, 20);

    updatePacman();

    drawLines();
    drawDots();
    drawPacman();

    drawScore();
}

function updatePacman() {
    pacmanX += (direction * 4); //pacman location
    if (pacmanX < 0) {
        pacmanX = width - pacmanImg.width;
    } else if (pacmanX > width - pacmanImg.width) {
        pacmanX = 0;
    }
}

function drawPacman() {
    console.log(Math.floor(frameCount / 5));
    // if (Math.floor(frameCount / 5) & 2 == 0) {
    if (frameCount % 2 == 0) {
        image(pacmanImg, pacmanX, 355);
    } else {
        if (direction > 0) {
            image(pacmanRightImg, pacmanX, 355);
        } else {
            image(pacmanLeftImg, pacmanX, 355);
        }
    }
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
    for(let i = 0; i < dots.length; i++) {
        dots[i].render();
    }
}

function keyPressed() {
    if (key == 'd') {
        direction = 1;
    } else if (key == 'a') {
        direction = -1;
    }
}

class Dot {
    constructor(x) {
        this.x = x;
        this.eaten = false;
    }

    render() {
        noStroke();
        fill("#ffffaa");
        rect(this.x, 415, 25, 25);
    }
}