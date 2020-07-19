function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  loadPixels()
  pixelDensity(1)
  for (let x=0;x<400;x++){
    for (let y=0;y<400;y++){
      index = 4*(x+y*400);
      pixels[index]=random(255);
      pixels[index+1]=random(255);
      pixels[index+2]=random(255);
      pixels[index+3]=100;
    }
  }
  updatePixels()
}