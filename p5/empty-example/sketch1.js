var video;
let redArray = [];
let greenArray = [];
let blueArray = [];

function setup() {
	index = 0;
	createCanvas(windowWidth, windowHeight);
	background(255);
	video = createCapture(VIDEO);
	video.size(0, 0, windowWidth, windowHeight);
	// video.hide();

}

function draw() {
	console.log('here at draw');
	image(video, 0, 0, windowWidth, windowHeight);
	pixelCount = windowWidth*windowHeight;
	video.loadPixels()
	for (let index = 0; index <= pixelCount; index+=4){
		redIndex = index;
		greenIndex = 1+index;
		greenIndex = 2+index;
		r = video.pixels[0];
		g = video.pixels[1];
		b = video.pixels[2];
		redArray[index/4] = r;
		greenArray[index/4] = g;
		blueArray[index/4] = b;
	}
	console.log(r)
	console.log(g)
	console.log(b)
	video.updatePixels()
}
