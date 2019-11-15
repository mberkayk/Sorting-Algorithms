class BubbleSort extends SortPanel {

  constructor(arr_, maxValue) {
    super(arr_, maxValue);

    this.si = 0;
    this.sortedUpTo = this.arr_size - 1;
  }

  display() {
    super.display();
    if(this.sorted == false){
                                //green
      super.drawLine(this.si, color(100, 200, 100));
    }

  }


  update() {
    if(this.sorted){return;}

    if(this.si == this.sortedUpTo){
      this.sortedUpTo--;
      this.si = 0;
    }

    if(this.sortedUpTo == 0){
      this.sorted = true;
    }

    if(this.arr[this.si] > this.arr[this.si+1]){
      this.swap(this.si, this.si+1);
    }

    this.si++;

  }

  swap(i, j){
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }


}
