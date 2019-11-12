
function setup() {
  createCanvas(windowWidth , windowHeight);
  frameRate(60);

  mainPanel = new MainPanel(width, height);
}

function draw() {
  background(0);

  mainPanel.display();

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  mainPanel.resizeEvent(width, height);
}

function mousePressed(){
  mainPanel.mousePressed(mouseX, mouseY);
}
