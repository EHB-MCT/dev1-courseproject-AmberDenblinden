"use strict";
import context from "../../Scripts/context.js";
import * as Utils from "../../Scripts/utils-1.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();
draw();

function draw() {
	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			context.strokeStyle = "white";
			Utils.strokeCircle(i * 100 + 25, j + i * 50, 20 + i);
		}
	}
}

function drawMaze() {
	context.lineWidth = 5;

	for (let i = 0; i < width; i += 20) {
		for (let j = 0; j < height; j += 20) {
			let randomValue = Math.round(Math.random());
			context.strokeStyle = randomValue === 0 ? "pink" : "lightblue";

			if (randomValue === 0) {
				Utils.drawLine(i, j, i + 15, j + 15);
			} else {
				Utils.drawLine(i, j + 15, i + 15, j);
			}
		}
	}
}
