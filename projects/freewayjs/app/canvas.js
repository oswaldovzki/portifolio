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
let xPlayerOne = 300;
let yPlayerOne = 590;
let xPlayerTwo = 1100
let yPlayerTwo = 590;
let collision = false;

function drawActors(actor, x, y) {
    image(actor, x, y, 60, 50);
}

function playerOneMovement() {
    if (keyIsDown(UP_ARROW)) {
        yPlayerOne -= 5;
    } if (keyIsDown(DOWN_ARROW)) {
        yPlayerOne += 5;
    }
}

function cowllision() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < carActors.length; i++) {
        collision = collideRectCircle(xCars[i], yCars[i], carLength, carHeight, xPlayerOne, yPlayerOne, 30)
        if (collision) {
            print("Crashed!")
        }
    }
}


// Cars
let xCars = [1480, 1480, 1480, 20, 20, 20];
let yCars = [75, 160, 250, 345, 430, 520];
let carsSpeed = [2, 5, 7, 3, 8, 10];
let carHeight = 80;
let carLength = 50;

function drawCars() {
    for (
        let i = 0;
        i < carActors.length;
        i = i + 1
    ) {
        image(carActors[i], xCars[i], yCars[i], carHeight, carLength);
    }
}

function carMovement() {
    for (let i = 0; i < xCars.length / 2; i++) {
        xCars[i] -= carsSpeed[i];
    };

    for (let i = 2; i < xCars.length; i++) {
        xCars[i] += carsSpeed[i];
    }
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
}
