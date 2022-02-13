difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function draw(){
    background('#C0C0C0');
    textSize(difference);
    fill('#800080');
    text('Snow side',50,100);
}
function modelLoaded(){
    console.log('POSENET is Initialized!!');
}
function gotPoses(results){
    console.log(results.length);
    
   if(results.length > 0){
       console.log(results);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);
       console.log("leftwristX = "+leftWristX+" rightwristX = "+rightWristX+" difference = "+difference);
   }
}