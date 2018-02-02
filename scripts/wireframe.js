var points, lines, cTrans, newPoints, xOrigin, yOrigin;
points = cube.points;
lines  = cube.lines;
newPoints = points;
var isSpinning = false;
var spin = 0;

var canvas;
var ctx;

window.onload = function() {
	init();
	draw();
}


function init() {
	canvas = document.getElementById("main");
	ctx = canvas.getContext("2d");
	xOrigin = canvas.width / 2;
	yOrigin = canvas.height / 2;
	initTranslate();
}


function initTranslate()
{
	cTrans = [
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
	];
	let center = points[0];
	cTrans = translate(cTrans, -center[0], -center[1], -center[2]);
	cTrans = scale(cTrans, 50, 50, 50);
	cTrans = reflectY(cTrans);
	cTrans = translate(cTrans, xOrigin, yOrigin, 0);
	newPoints = mMult(points, cTrans);
}


function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.strokeStyle = "#ff0000";
	for(let i = 0; i < lines.length; ++i)
	{
		let x1 = newPoints[lines[i][0]][0];
		let y1 = newPoints[lines[i][0]][1];
		let x2 = newPoints[lines[i][1]][0];
		let y2 = newPoints[lines[i][1]][1];

		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}
}
