// Get the canvas element and its 2D context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the initial position and velocity of the cube
let x = 100;
let y = 100;
let vx = 5;
let vy = 7;
const size = 50;

// Draw the cube on the canvas
function drawCube() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the cube
  ctx.fillStyle = "green";
  ctx.fillRect(x, y, size, size);
}

// Update the position of the cube and handle collisions with the edges of the canvas
function updateCube() {
  // Update the position of the cube
  x += vx;
  y += vy;
  
  // Handle collisions with the edges of the canvas
  if (x < 0 || x + size > canvas.width) {
    vx = -vx;
  }
  if (y < 0 || y + size > canvas.height) {
    vy = -vy;
  }
}

// Start the animation loop
function animate() {
  // Update the position of the cube
  updateCube();
  
  // Draw the cube on the canvas
  drawCube();
  
  // Request the next frame of the animation loop
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
