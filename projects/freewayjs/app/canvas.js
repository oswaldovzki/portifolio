// Load assets
let backgroundImage, playerOneActor, playerTwoActor, greenCarActor, blackCarActor, yellowCarActor, collisionSound, scoreSound, gameMusic;
let carActors = [];

function preload() {
    backgroundImage = loadImage('./assets/img/estrada.png');
    playerOneActor = loadImage('./assets/img/actor.png');
    playerTwoActor = loadImage('./assets/img/actor.png');
    greenCarActor = loadImage('./assets/img/greencar.png');
    blackCarActor = loadImage('./assets/img/blackcar.png');
    yellowCarActor = loadImage('./assets/img/yellowcar.png');
    carActors = [greenCarActor, blackCarActor, yellowCarActor, blackCarActor, yellowCarActor, greenCarActor];
    collisionSound = loadSound("./assets/sound/colidiu.mp3");
    scoreSound = loadSound("./assets/sound/pontos.wav");
    gameMusic = loadSound("./assets/sound/trilha.mp3");
}

// Player and car settings
const playerOne = { x: 260, y: 590, score: 0, collision: false };
const playerTwo = { x: 1076, y: 590, score: 0, collision: false };
const cars = {
    xPositions: [1480, 1480, 1480, 20, 20, 20],
    yPositions: [75, 160, 250, 345, 430, 520],
    speeds: [2, 5, 7, 8, 4, 3],
    length: 80,
    height: 50,
};

// Draw functions
function drawActors(actor, x, y) {
    image(actor, x, y, 60, 50);
}

function drawScore(player, position) {
    textAlign(CENTER);
    textSize(40);
    stroke(color(255, 200, 30));
    fill(color(255, 200, 30));
    text(player.score, position, 43);
}

function drawCars() {
    for (let i = 0; i < carActors.length; i++) {
        image(carActors[i], cars.xPositions[i], cars.yPositions[i], cars.length, cars.height);
    }
}

// Movement functions
function movePlayer(player, upKey, downKey) {
    if (keyIsDown(upKey)) {
        player.y -= 5;
    }
    if (keyIsDown(downKey)) {
        player.y += 5;
    }
    player.y = constrain(player.y, 0, height - 50);
}

function moveCars() {
    for (let i = 0; i < cars.xPositions.length; i++) {
        cars.xPositions[i] -= cars.speeds[i];
        if (cars.xPositions[i] < -cars.length) {
            cars.xPositions[i] = width;
        }
    }
}

// Collision and scoring functions
function checkCollision(player) {
    for (let i = 0; i < carActors.length; i++) {
        let collision = collideRectCircle(cars.xPositions[i], cars.yPositions[i], cars.length, cars.height, player.x + 30, player.y + 25, 40);
        if (collision) {
            player.y = 590;
            collisionSound.play();
            player.score -= 1;
        }
    }
}

function checkScore(player) {
    if (player.y < 15) {
        player.score += 1;
        player.y = 590;
        scoreSound.play();
    }
}

// Game setup and draw functions
function setup() {
    let canvas = createCanvas(1475, 643);
    canvas.parent('stage');
    stroke('magenta');
    gameMusic.loop();
}

function draw() {
    background(backgroundImage);
    drawActors(playerOneActor, playerOne.x, playerOne.y);
    drawActors(playerTwoActor, playerTwo.x, playerTwo.y);
    drawCars();
    moveCars();
    movePlayer(playerOne, UP_ARROW, DOWN_ARROW);
    movePlayer(playerTwo, 87, 83); // W and S keys
    checkCollision(playerOne);
    checkCollision(playerTwo);
    drawScore(playerOne, width / 5);
    drawScore(playerTwo, width * 0.75);
    checkScore(playerOne);
    checkScore(playerTwo);
}
