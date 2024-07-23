// Variables
const canvasWidth = 600;
const canvasHeight = 400;

const settingsPlay = document.querySelector('.settings__play');
const settingsSpeed = document.querySelector('.settings__speed');

let xBall = 300;
let yBall = 200;
let ballDiameter = 20;
let ballradius = ballDiameter / 2;

let xRacketPlayer1 = 5;
let yRacketPlayer1 = 150;

let xRacketPlayer2 = 585;
let yRacketPlayer2 = 150;
let racketVelocityPlayer2;
let missChance = 0;

let player2Controll;

let racketWidth = 10;
let racketHeight = 90;

let ballVelocity = Number(settingsSpeed.value);
let xballVelocity = ballVelocity;
let yballVelocity = ballVelocity;

let player1Score = 0
let player2Score = 0

let racketSound;
let scoreSound;

function preload() {
    racketSound = loadSound('./raquetada.mp3');
    scoreSound = loadSound('./ponto.mp3');
}

// Create play canvas and actors
function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('stage');
    stroke('magenta');
}

function draw() {
    background(25);
    line(301, 0, 301, 400);
    ballDraw();
    racket();
    checkBorder();
    player1RacketMovement();
    autoPlayer2Racketmovement();
    ballRacketCollision();
    drawScore();
    countScore();
    unstuckBall();
}

function ballDraw() {
    circle(xBall, yBall, ballDiameter);

    xBall += xballVelocity;
    yBall += yballVelocity;
}

function checkBorder() {
    if (xBall + ballradius > width || xBall - ballradius < 0) {
        xballVelocity *= -1;
    } if (yBall + ballradius > height || yBall - ballradius < 0) {
        yballVelocity *= -1;
    }
}

function racket() {
    rect(xRacketPlayer1, yRacketPlayer1, racketWidth, racketHeight);
    rect(xRacketPlayer2, yRacketPlayer2, racketWidth, racketHeight);
}

// Raquets Movements
function player1RacketMovement() {
    if (keyIsDown(UP_ARROW)) {
        yRacketPlayer1 -= 5;
    } if (keyIsDown(DOWN_ARROW)) {
        yRacketPlayer1 += 5;
    }
    yRacketPlayer1 = constrain(yRacketPlayer1, 10, 305);
}
function autoPlayer2Racketmovement() {
    racketVelocityPlayer2 = yBall - yRacketPlayer2 - racketWidth / 2 - 30;
    yRacketPlayer2 += racketVelocityPlayer2 + missChance;
    missChanceCalc();
    yRacketPlayer2 = constrain(yRacketPlayer2, 10, 305);

}

function missChanceCalc() {
    if (player2Score >= player1Score + 5) {
        missChance += 1
        if (missChance >= 39) {
            missChance = 40
        }
    } else {
        missChance -= 1
        if (missChance <= 35) {
            missChance = 35
        }
    }
}

function player2Racketmovement() {
    if (keyIsDown(87)) {
        yRacketPlayer2 -= 5;
    } if (keyIsDown(83)) {
        yRacketPlayer2 += 5;
    }
    yRacketPlayer2 = constrain(yRacketPlayer2, 10, 305);
}

//Ball collision
function ballRacketCollision() {
    if (xBall - ballradius < xRacketPlayer1 + racketWidth
        && yBall - ballradius < yRacketPlayer1 + racketHeight
        && yBall + ballradius > yRacketPlayer1) {
        xballVelocity *= -1;
        racketSound.play();
    } if (xBall + ballradius > xRacketPlayer2
        && yBall - ballradius > yRacketPlayer2
        && yBall + ballradius < yRacketPlayer2 + racketHeight
    ) {
        xballVelocity *= -1;
        racketSound.play();
    }
}

// Score
function drawScore() {
    fill(color(21, 11, 33));
    rect(130, 10, 40, 20);
    rect(430, 10, 40, 20);
    fill('white');
    stroke('white')
    textSize(16);
    textAlign(CENTER);
    text(player1Score, 150, 26);
    text(player2Score, 450, 26);
}

function countScore() {
    if (xBall > 590) {
        player1Score += 1;
        scoreSound.play();
    } if (xBall < 10) {
        player2Score += 1;
        scoreSound.play();
    }
}

function unstuckBall() {
    if (xBall - ballradius < 0) {
        xBall = 23
    } if (xBall + ballradius > 600) {
        xBall = 577
    }
}

// Configurations

addEventListener('click', () => {
    ballVelocity = Number(settingsSpeed.value);
    console.log(ballVelocity);
}
)
