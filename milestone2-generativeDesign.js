"use strict";
import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils-1.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();
draw();
drawHeart();

// Circle lines
function draw() {
	context.fillStyle = "white";

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < height; j++) {
			// Circle lines form left to right becoming smaller
			Utils.fillCircle(i * 100 + 20, j + i * 100, 20 + i);

			// Circle lines form right to left becoming smaller
			Utils.fillCircle(width - (i * 100 + 20), height - (j + i * 100), 20 + i);
		}
	}
}

// Changing background
function drawMaze() {
	for (let i = 0; i < width; i += 20) {
		for (let j = 0; j < height; j += 20) {
			let randomValue = Math.round(Math.random());
			let color = randomValue === 0 ? "pink" : "lightblue";

			if (randomValue === 0) {
				drawHeart(i, j, 5, color);
			} else {
				drawHeart(i, j, 5, color);
			}
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
