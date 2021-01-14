
var minutes;

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}



function draw() {
	background(225);
	m1 = map(hour(), 1, 24, 1, 100, true)
	m2 = map(minute(), 0, 60, 1, 100, true)
	m3 = map(second(), 0, 60, 1, 100, true)
	textSize(m1);
	fill(0);
	text('Hour', 10, 80);
	textSize(m2);
	text('Minute', 10, 280);
	textSize(m3);
	text('Second', 10, 480);

	if (minutes != minute()){
		print(minute());
		minutes = minute();
	}
}
