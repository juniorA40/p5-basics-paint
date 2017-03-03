var newWidth = 90;
var wlaPcs = 90;

//WLA function has been activated.
function setup(){
    createCanvas(500,300);
    background(10);
}

//Two circles make a budi :p
function draw(){
    // background(50);
    if(mouseIsPressed){
     noStroke();
    fill(38,255,4,10);
    ellipse(mouseX,mouseY,newWidth,wlaPcs);   
    }
 
}

