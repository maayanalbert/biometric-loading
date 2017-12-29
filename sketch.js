var xoff=0.400;
var yoff=0.300;
var xLarger = true;
var lastXLarger = true
var xArc = .1
var yArc = .2
var end = false
var numIterations = 12
var opacity = 0
var step = 40
var start = false
var count = 0

function setup() {
  createCanvas(640/2*3,640);
 
  smooth();
  //smooth();
  //frameRate(30);
  //noiseSeed(random(1,600));


}

function draw() {

  if(end == true){
    fadeOut()
  }

  if(start == true){
    fadeIn()
  }

  noiseDetail(1,0.9);
  background(27,36,47);
  fill(27,36,47);
  noFill();
  //CODE FOR PLAYING RANDOM
 // background(250,200,0);
  
   /* for (var i=1; i<640; i+=10){
  xoff+=0.05;
  arc(width/2,height/2,i,i, PI*(random(0,1)*2),PI*(random(0,1)*2));
  println(PI*(noise(xoff)*i/1000));
    }*/
    
    //RECOMMENDED xoff+=0.05 and yoff=0.03
 xoff += 0.011;
  yoff += 0.005;
  for (var i=1; i<numIterations; i+=1){
 //USE stroke RANDOM for vibrating sort of effect while noise on strokeWEight will give more rhythm to change of stroke
       // strokeWeight(random(1,4));
  strokeWeight(noise(xoff,i)*15);
  // strokeWeight(2);
  xArc = constrain(PI*(noise(xoff*i*step/640)*8),0, yArc)
  yArc = constrain(PI*(noise(yoff*i*step/450)*3), xArc+1, PI * 2)
  if(i*step == 491){
    print("xArc: " + xoff)
    print('yArc: ' + yoff)
    print('')

    var testArcX = (.1*PI)%(2*PI)
    var testArcY = (1.9*PI)%(2*PI)

    // arc(width/2,height/2,i,i, testArcX,testArcY);
    // print("xArc: " + testArcX)
    // print('yArc: ' + testArcY)
    // print('')

    lastXLarger = xLarger
    if(xArc >= yArc){
      xLarger = true
    }else{
      xLarger = false
    }

    if(lastXLarger != xLarger){
      print('CROSS')
    }
  }
  stroke(252, 176, 86, opacity * 175/(i*step))

  arc(width/2,height/2,i*step,i*step, yArc,xArc);
    }

  if(count == 0){
    drawText()
  }
}

function fadeOut(){
  if(opacity > 0){
    //numIterations -= 1/2
    opacity -= 4
  }
}

function fadeIn(){
  if(opacity < 300){
    //numIterations -= 1/2
    opacity += .3
  }
}

function mousePressed(){
  count += 1
  if(count%2 == 1){
    start = true
    end = false
  }
  if(count%2 == 0){
    start = false
    end = true
  }
}

function drawText(){
  textSize(25)
  textFont('Georgia')
  textOpacity = noise(xoff*2) * 255
  fill(252, 176, 86, textOpacity);
  var message = "Click To Reveal Animation"
  text(message, width/2 - textWidth(message)/2, height/2)
}

