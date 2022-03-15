const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

//This saves the newly created image
const saveLayer = (_canvas) => {
  fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
  console.log("🎨Image Created🖌️");
};

// This draws the image based on ctx settings in function
const drawLayer = async () => {
  const image = await loadImage("./shiitake.png");
  ctx.drawImage(image, 0, 0, 500, 500);
  console.log("Program Ran 🧑‍🎨");
  saveLayer(canvas);
};

drawLayer();
