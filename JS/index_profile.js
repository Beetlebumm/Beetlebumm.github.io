function preload() {
    profile_img = loadImage("../image/index/Profile.png");

}

function setup() {
    createCanvas(displayWidth / 4, displayHeight / 1.5, WEBGL);
    angleMode(DEGREES);

}

function draw() {
    background(0);
    background(244, 243, 255);
    rotateY(180 + (mouseX - width) / width * 8);

    rotateX(0 + (mouseY - height / 2) / height * 8);

    texture(profile_img);

    noStroke;

    sphere(width / 4, 25, 6);

}