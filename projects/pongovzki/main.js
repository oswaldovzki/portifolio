// Variables
let xBall = 300;
let yBall = 200;
let ballDiameter = 20;
let ballradius = ballDiameter / 2;

let xRacketPlayer1 = 5;
let yRacketPlayer1 = 150;

let xRacketPlayer2 = 585;
let yRacketPlayer2 = 150;
let racketVelocityPlayer2;

let racketWidth = 10;
let racketHeight = 90;

let ballVelocity = 5;
let xballVelocity = ballVelocity;
let yballVelocity = ballVelocity;

let player1Points = 0
let player2Points = 0

const canvasWidth = 600;
const canvasHeight = 400;


function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('stage');
    stroke('magenta');
}

function draw() {
    background(25);
    line(301, 0, 301, 400);
    ballDraw();
    checkBorder();
    racket();
    player1RacketMovement();
    player2Racketmovement();
    ballRacketCollision();
    drawPoints();
    countPoints();
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

function player2Racketmovement() {
    racketVelocityPlayer2 = yBall - yRacketPlayer2 - racketWidth / 2 - 30;
    yRacketPlayer2 += racketVelocityPlayer2
    yRacketPlayer2 = constrain(yRacketPlayer2, 10, 305);
}

//Ball collision
function ballRacketCollision() {
    if (xBall - ballradius < xRacketPlayer1 + racketWidth
        && yBall - ballradius < yRacketPlayer1 + racketHeight
        && yBall + ballradius > yRacketPlayer1) {
        xballVelocity *= -1;
    } if (xBall + ballradius > xRacketPlayer2
        && yBall - ballradius > yRacketPlayer2
        && yBall + ballradius < yRacketPlayer2 + racketHeight
    ) {
        xballVelocity *= -1;
    }
}



// Points
function drawPoints() {
    fill(color(21, 11, 33   ));
    rect(130, 10, 40, 20);
    rect(430, 10, 40, 20);
    fill('white');
    stroke('white')
    textSize(16);
    textAlign(CENTER);
    text(player1Points, 150, 26);
    text(player2Points, 450, 26);
}

function countPoints() {
    if (xBall > 590) {
        player1Points += 1
    } if (xBall < 10) {
        player2Points += 1
    }
}