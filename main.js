//Drawing
let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;
let clothcloudpng = document.getElementById("cloud.png");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300); //Draw a filled square
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#056608";
ctx.fillRect(0, 300, 400, 200); //Draw a filled square
ctx.drawImage(cloud, 150, 100);
ctx.drawImage(cloud, 189, 80);

//Move Clouds

//Global Variable
let cr = 189;
let cl = 150;
let sunY = 300; // Y position of the sun
let sunSize = 2 * Math.PI;
let sungreen = 0;
//Main Program
requestAnimationFrame(loop);
function loop() {
  // Update Variable
  cr = cr - 1;
  cl = cl + 1;
  sungreen++;

  // Check if the sun is not at the bottom of the frame
  if (sunY > 100) {
    sunY -= 1;

    // Make the sun bigger
    sunSize += 0.05;

    // Change the sun color to yellow
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(200, sunY, 20 + sunSize * 5, 0, sunSize);
    ctx.fill();
  }

  // Draw Background
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 300); // Draw a filled square

  // Draw Sun
  ctx.fillStyle = `rgb(225, ${sungreen}, 0)`; // Set the color back to red for the rest of the scene
  ctx.beginPath();
  ctx.arc(200, sunY, 20 + sunSize * 5, 0, sunSize);
  ctx.fill();

  // Draw Grass
  ctx.fillStyle = "#056608";
  ctx.fillRect(0, 300, 400, 200); // Draw a filled square

  // Draw Cloud Images
  ctx.drawImage(cloud, cl, 100);
  ctx.drawImage(cloud, cr, 80);

  requestAnimationFrame(loop);
}
