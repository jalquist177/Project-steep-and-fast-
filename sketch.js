function setup() {
createCanvas(800,800);
strokeWeight(width * 0.03);
}

function draw() {
background(0,255,0);
rect(100, 65, 600, 600);
ellipse(400, 300, 175, 175);

beginShape();
  vertex(250, 400);
  vertex(400, 65);
  vertex(100, 65);
  fill(106,13,173);
endShape(CLOSE);

beginShape();
  vertex(550, 400);
  vertex(700, 65);
  vertex(400, 65);
  fill(106,13,173);
endShape(CLOSE);

beginShape();
vertex(250, 400);
vertex(550, 400);
vertex(400, 65);
fill(255,255,0);
endShape(CLOSE);

beginShape();
  vertex(250, 400);
  vertex(550, 400);
  vertex(400, 700);
  fill(106,13,173);
endShape(CLOSE);

fill(255,0,0);
ellipse(400, 300, 175, 175);
ellipse(400, 760, 50, 50);
ellipse(730, 35, 50, 50);
ellipse(70, 35, 50, 50);

beginShape();
  vertex(400, 400);
  vertex(400, 210);
endShape(CLOSE);




}