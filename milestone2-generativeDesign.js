"use strict";
import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils-1.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();
draw();
drawAgain();

// Circle lines
function draw() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < height; j++) {
			context.fillStyle = "white";
			context.lineWidth = 2;
			Utils.fillCircle(i * 100 + 20, j + i * 100, 20 + i);
		}
	}
}

// Try circle line again other side
function drawAgain() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; i < height; j++) {
			context.fillStyle = "white";
			context.lineWidth = 2;
			Utils.fillCircle(width - (i * 100 + 20), height - (j + i * 100), 20 + i);
		}
	}
}

// Changing background
function drawMaze() {
	context.lineWidth = 5;

	for (let i = 0; i < width; i += 20) {
		for (let j = 0; j < height; j += 20) {
			let randomValue = Math.round(Math.random());
			context.strokeStyle = randomValue === 0 ? "pink" : "lightblue";

			if (randomValue === 0) {
				Utils.drawLine(i, j, i + Math.random() * 2, j + 15);
			} else {
				Utils.drawLine(i, j + Math.random() * 2, i + 15, j);
			}
		}
	}
}
