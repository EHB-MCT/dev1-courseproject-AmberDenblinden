"use strict";
import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils-1.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

drawHeartMaze();
animate();

// Circle lines
function draw() {
	context.fillStyle = "white";

	for (let i = 0; i < 11; i++) {
		for (let j = 0; j < height; j++) {
			// Circle lines form left to right becoming smaller
			Utils.fillCircle(i * 100 + 20, j + i * 100, 20 + i);

			// Circle lines form right to left becoming smaller
			Utils.fillCircle(width - (i * 100 + 20), height - (j + i * 100), 20 + i);
		}
	}
}

// Changing background
function drawHeartMaze() {
	for (let i = 0; i < width; i += 20) {
		for (let j = 0; j < height; j += 20) {
			let randomValue = Math.round(Math.random());
			let color = randomValue === 0 ? "pink" : "lightblue";
			drawHeart(i, j, 5, color);
		}
	}
}

// drawing heart shape
function drawHeart(x, y, size, color) {
	context.fillStyle = color;
	Utils.fillCircle(x, y, size);
	Utils.fillCircle(x + 5, y + 5, size);
	context.fillRect(x - 5, y, size + 5, size + 5);
}

// Make background follow and change color with mouse movement
/**
 * @param {MouseEvent} eventData
 */

function move(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;

	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);

	drawHeartMaze();
	draw();
	signature();
	drawHeart(x, y, 5, color);
}

// signature
function signature() {
	//big rectangle
	context.fillStyle = "lightgray";
	context.fillRect(50, 700, 175, 175);

	//small rectangles
	context.fillStyle = "lightgreen";
	context.fillRect(100, 725, 25, 25);
	context.fillRect(150, 725, 25, 25);
	context.fillRect(125, 750, 25, 50);
	context.fillRect(75, 775, 25, 25);
	context.fillRect(175, 775, 25, 25);
	context.fillRect(100, 800, 75, 50);
}

// animate circles
function animate() {
	draw();
	requestAnimationFrame(animate);
	signature();
}
