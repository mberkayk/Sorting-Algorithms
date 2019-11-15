class SelectionSort extends SortPanel {

  constructor(arr_, maxValue) {
    super(arr_, maxValue);
    this.si = 0;
    this.smallest = 0;
    this.searching = true;
  }

  display() {
    super.display();
    super.drawLine(this.si, color(200, 200, 100));
    if(!this.searching){
      super.drawLine(this.smallest, color(100, 200, 100));
    }
  }


  update() {
    if(this.si == this.arr.length){
      this.sorted = true;
      return;
    }

    if(this.searching){
      //Find the smallest item
      this.smallest = this.si;
      for(let i = this.si; i < this.arr.length; i++){
        if(this.arr[i] < this.arr[this.smallest]){
          this.smallest = i;
        }
      }
      this.searching = false;
    }else{

      //Swap the smallest and the selected index(si) t
      let temp = this.arr[this.smallest];
      this.arr[this.smallest] = this.arr[this.si];
      this.arr[this.si] = temp;
      //Increment selected index
      this.si++;

      this.searching = true;
    }


  }

}
