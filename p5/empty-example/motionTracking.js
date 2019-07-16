var video;
var vScale = 12;

function setup() {
  createCanvas(480, 720);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height*0.5 / vScale);
}

function draw() {
  background(51);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x ++) {
      
      var index = (video.width - x +1 +(y *video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      
      var bright = (r+g+b)/3;
      var rectSize = map(bright,0,255,0,vScale);
      
      noStroke();
      fill(r,g,b);
      //fill(120,250,255);
      rectMode(CENTER);
      rect(x*vScale,y*vScale,rectSize,rectSize);
      console.log(index);
			
			push();
			translate(0,360);
      if (r>220 && g<100 && b <100){
				rectMode(CENTER);
				fill(255,0,0);
				rect(x*vScale,y*vScale,12,12);}
      else if (g>220 && r<100 && b <100){
				rectMode(CENTER);
				fill(0,255,0);
				rect(x*vScale,y*vScale,12,12);}
      else if (b>220 && r<100 && g <100){
				rectMode(CENTER);
				fill(0,0,255);
				rect(x*vScale,y*vScale,12,12);}
			pop();
    }
  }


}~
      var r = video.pixels[index+0];