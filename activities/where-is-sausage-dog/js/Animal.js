class Animal {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = ;
  }
  update() {
    display();
  }

  display() {
    push();
    imageMode(CENTER);
    traslate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }
}