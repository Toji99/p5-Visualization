var video;
// var mic;
function setup() {
	i = 0
	// avgCheck = 0
	// mic = new p5.AudioIn();
	createCanvas(windowWidth, windowHeight);
	background(255);
	video = createCapture(VIDEO);
	video.size(0, 0, windowWidth, windowHeight);
	// mic.start();
	// video.hide();

}

function draw() {
	//console.log('here at draw');
	// micLevel = mic.getLevel();
	image(video, 0, 0, windowWidth, windowHeight);
	pixelCount = windowWidth*windowHeight;
	video.loadPixels()
	let avgColor = [video.pixels[i],video.pixels[i+1],video.pixels[i+2]]
	for (let i = 0; i <= (pixelCount/4); i+=4){
		avgColor[0] = (video.pixels[i]+avgColor[0])/2
		avgColor[1] = (video.pixels[i+1]+avgColor[1])/2
		avgColor[2] = (video.pixels[i+2]+avgColor[2])/2
	}
	// 	redIndex = index;
	// 	greenIndex = 1+index;
	// 	greenIndex = 2+index;
	// 	blueIndex = 3+index;
	// 	r = video.pixels[redIndex];
	// 	g = video.pixels[greenIndex];
	// 	b = video.pixels[blueIndex];
	// 	redArray.push(r);
	// 	greenArray.push(g);
	// 	blueArray.push(b);
	// console.log(r)
	// console.log(g)
	console.log(avgColor)
	video.updatePixels()
	}
