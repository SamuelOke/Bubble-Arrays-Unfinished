// Bubble Objects (Associative Arrays) - property:value pairs)

let cnv = document.getElementById('my-canvas');
let ctx = cnv.getContext('2d');
cnv.width = 800;
cnv.height = 600;

let bubbles = [];
bubbles.push(newBubble(400, 300, 25, 'red'));
bubbles.push(newBubble(400, 300, 25, 'blue'));
bubbles.push(newBubble(400, 300, 25, 'green'));
bubbles.push(newBubble(400, 300, 25, 'orange'));
bubbles.push(newBubble(400, 300, 25, 'purple'));

requestAnimationFrame(draw);
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    for (let i = 0; i < bubbles.length; i++) {
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }
    
    requestAnimationFrame(draw);
}

function newBubble(initX, initY, initR, initColor ) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    };
}

function drawBubble(aBubble) {
    stroke(aBubble.color);
    circle(aBubble.x, aBubble.y, aBubble.r, 'stroke');
}    

function moveBubble(aBubble) {
    aBubble.x += randomInt(-2, 3);
    aBubble.y += randomInt(-2, 3);
}