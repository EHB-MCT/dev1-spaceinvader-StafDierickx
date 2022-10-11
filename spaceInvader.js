"use strict";

// alert("Draw your space invader here");

//canvas settings
const canvas = document.getElementById("canvas")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext("2d") //create 2d context

// context.beginPath() //begin with drawing
// context.fillRect(0, 0, 500, 500)
// context.strokeStyle = "black"
// context.stroke()

context.beginPath()
context.fillRect(100, 0, 300, 100)

context.fillRect(0, 100, 100, 100)
context.fillRect(400, 100, 100, 100)

context.fillRect(100, 200, 300, 200)
context.fillRect(0, 400, 500, 100)

context.fillStyle = "purple"
context.stroke()
