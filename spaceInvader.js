"use strict";


signature();

function signature() {
    
    let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //big rectangle
   context.fillStyle= "lightgray"
   context.fillRect(50,50,300,300);

   //small rectangles
   context.fillStyle="lightgreen"
   context.fillRect(125,75,50,50);
   context.fillRect(225,75,50,50);
   context.fillRect(175,125,50,100);
   context.fillRect(75,175,50,50);
   context.fillRect(275,175,50,50);
   context.fillRect(125,225,150,100);
}