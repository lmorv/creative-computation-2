class SausageDog extends Animal {
  constructor(x, y, image, angle) {
    super(x, y, image, angle);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}