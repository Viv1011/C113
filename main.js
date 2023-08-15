function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
   circle(80, 70, 20);
   rect(50, 80, 55, 55);
}

function take_snapshot() {
    save('student_name.png');
}

