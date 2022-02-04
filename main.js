noseX=0;
noseY=0;
function preload(){
img=loadImage("moustache.png");
}
function setup(){
canvas=createCanvas(300,300);
video=createCapture(VIDEO);
canvas.center();
video.hide();
video.size(300,300)
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(img,noseX,noseY,80,80)
}
function modelLoaded(){
    console.log("poseNet is Initialised")
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-35;
    noseY=results[0].pose.nose.y-10;
}
}
function take_snapshot(){
    save("mypicture.png");
}