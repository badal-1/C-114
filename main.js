function preload(){
}
function setup(){
canvas = createCanvas(400,400);
canvas.position(500, 600);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 160, 120, 300, 300);
}