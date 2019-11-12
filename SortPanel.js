class SortPanel extends Panel {

  constructor(arr_, maxValue) {
    super();
    this.arr = [];
    arrayCopy(arr_, this.arr);

    this.arr_size = this.arr.length;
    this.maxValue = maxValue;
  }

  update() {}

  display() {
    super.display();
    this.displayArray();
  }

  displayArray() {
    for (let i = 0; i < this.arr_size; i++) {
      this.drawLine(i, color(120, 200, 200));
    }
  }

  drawLine(index, color) {
    if (index < this.arr.length) {
      fill(color);
      stroke(color);
      let lineWidth = this.width / this.arr_size;
      let x = lineWidth * index;
      let length = (this.arr[index] * this.height) / this.maxValue;
      let y = this.height - length;
      rect(this.x + x, this.y + y, lineWidth, length);
    }
  }
}
