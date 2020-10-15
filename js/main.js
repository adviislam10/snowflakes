// SNOWFLAKES OPTIONS

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 800);

// Variables
let snowflakes = [];

// Main Draw Function
requestAnimationFrame(draw);

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for (let i = 0; i < snowflakes.length; i++) {
        // Animation
        snowflakes[i].y += snowflakes[i].speed;
        if (snowflakes[i].y > cnv.height) {
            snowflakes[i].y = 0;
            snowflakes[i].x = Math.random(0, cnv.width)
        }
        // Draw snowflakes
        ctx.strokeStyle = 'white';
        ctx.fillCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].r);

    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Key Events
document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(event) {
    console.log(event.code)
    if (event.code == 'Digit1') {
        for (let i = 0; i < 100; i++) {
            snowflakes.push({
                x: Math.randomDec(0, cnv.width),
                y: Math.randomDec(0, cnv.height),
                r: Math.randomDec(1, 3),
                speed: Math.randomDec(4, 7)
            });
        }
    }
}