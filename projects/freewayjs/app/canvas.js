// Load assets
let backgroundImage;
let playerOneActor;
let playerTwoActor;
let greenCarActor;
let blackCarActor;
let yellowCarActor;

function preload() {
    backgroundImage = loadImage('./assets/img/estrada.png');
    playerOneActor = loadImage('./assets/img/actor.png');
    playerTwoActor = loadImage('./assets/img/actor.png');
    greenCarActor = loadImage('./assets/img/greencar.png');
    blackCarActor = loadImage('./assets/img/blackcar.png');
    yellowCarActor = loadImage('./assets/img/yellowcar.png');
    carActors = [greenCarActor, blackCarActor, yellowCarActor, blackCarActor, yellowCarActor, greenCarActor];
}

// Players
let xPlayerOne = 260;
let yPlayerOne = 590;
let xPlayerTwo = 1076;
let yPlayerTwo = 590;
let collision = false;
let playerOneScore = 0;
let playerTwoScore = 0;

function drawActors(actor, x, y) {
    image(actor, x, y, 60, 50);
}

function playerOneMovement() {
    if (keyIsDown(UP_ARROW)) {
        yPlayerOne -= 5;
    } if (keyIsDown(DOWN_ARROW)) {
        yPlayerOne += 5;
    } if (keyIsDown(87)) {
        yPlayerTwo -= 5;
    } if (keyIsDown(83)) {
        yPlayerTwo += 5;
    }
}

function checkCowllision(xPlayer,yPlayer) {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < carActors.length; i++) {
        collision = collideRectCircle(xCars[i], yCars[i], carLength, carHeight, xPlayer+30, yPlayer+25, 40)
        if (collision) {
            resetPosition();
            playerOneScore -= 1;
        }
    }
}

function resetPosition() {
    yPlayerOne = 590;    
}

function drawScoreOne() {
    textAlign(CENTER);
    textSize(40);
    stroke(color(255,200,30));
    fill(color(255,200,30));
    text(playerOneScore, width / 5, 43)
}

function drawScoreTwo() {
    textAlign(CENTER);
    textSize(40);
    stroke(color(255,200,30));
    fill(color(255,200,30));
    text(playerTwoScore, width * 0.75, 43)
}

function setScore() {
    if (yPlayerOne < 15) {
        playerOneScore += 1;
        resetPosition();
    }
}




// Cars
let xCars = [1480, 1480, 1480, 20, 20, 20];
let yCars = [75, 160, 250, 345, 430, 520];
let carsSpeed = [2, 5, 7, 8, 4, 3];
let carLength = 80;
let carHeight = 50;

function drawCars() {
    for (
        let i = 0;
        i < carActors.length;
        i = i + 1
    ) {
        image(carActors[i], xCars[i], yCars[i], carLength, carHeight);
    }
}

function carMovement() {
    for (let i = 0; i < xCars.length; i++) {
        xCars[i] -= carsSpeed[i];
    };
}

function outOfCanvas(xCar) {
    return xCar < -100;
}

function carInitialPosition() {
    for (let i = 0; i < xCars.length; i++) {
        if (outOfCanvas(xCars[i])) {
            xCars[i] = 1480;
        }
    }
}

// Game Canvas
const canvasWidth = 1475;
const canvasHeight = 643;


function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('stage');
    stroke('magenta');
}

function draw() {
    background(backgroundImage);
    drawActors(playerOneActor, xPlayerOne, yPlayerOne);
    drawActors(playerTwoActor, xPlayerTwo, yPlayerTwo);
    drawCars();
    carMovement();
    carInitialPosition();
    playerOneMovement();
    checkCowllision(xPlayerOne,yPlayerOne);
    checkCowllision(xPlayerTwo,yPlayerTwo);
    drawScoreOne();
    drawScoreTwo();
    setScore();
}
