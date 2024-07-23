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
    carActors = [greenCarActor,blackCarActor,yellowCarActor];
}

// Players
let yPlayerOne = 590;
let yPlayerTwo = 590;

function drawActors(actor, x, y) {
    image(actor, x, y, 60, 50);
}

function playerOneMovement() {
    if (keyIsDown(UP_ARROW)) {
        yPlayerOne -= 3;
    } if (keyIsDown(DOWN_ARROW)) {
        yPlayerOne += 3;
    }
}

// Cars
let xCars = [1480,1480,1480,20,20,20];
let yCars = [75,160,250,345,430,520];
let carsSpeed = [2,5,7]

function drawCars(car, x, y) {
    image(car, x, y, 80, 50);
}

function carMovement() {
    xCars[0] -= carsSpeed[0];
    xCars[1] -= carsSpeed[1];
    xCars[2] -= carsSpeed[2]
}

function carInitialPosition() {
    if (xCars[0] < -70) {
        xCars[0] = 1480
    } if (xCars[1] < -70) {
        xCars[1] = 1480
    } if (xCars[2] < -70) {
        xCars[2] = 1480
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
    drawActors(playerOneActor, 300, yPlayerOne);
    drawActors(playerTwoActor, 1100, yPlayerTwo);
    drawCars(carActors[0], xCars[0], yCars[0]);
    drawCars(carActors[1], xCars[1], yCars[1]);
    drawCars(carActors[0], xCars[0], yCars[0]);
    drawCars(carActors[2], xCars[2], yCars[2]);
    drawCars(carActors[1], xCars[1], yCars[1]);
    drawCars(carActors[2], xCars[2], yCars[2]);

    carMovement();
    carInitialPosition();
    playerOneMovement();
}



// function drawCars() {
//     for (
//         let i = 0;
//         i < carActors.lenght;
//         i = i + 1
//     ) {
//         image(carActors[i], xCars[i], yCars[i], 80, 50);
//     }
// }

// function draw() {
//     background(backgroundImage);
//     drawActors(playerOneActor, 300, yPlayerOne);
//     drawActors(playerTwoActor, 1100, yPlayerTwo);
//     drawCars();
//     carMovement();
//     carInitialPosition();
//     playerOneMovement();
// }