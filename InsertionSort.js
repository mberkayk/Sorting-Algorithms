class InsertionSort extends SortPanel {

  constructor(arr_, maxValue){
    super(arr_, maxValue);
    this.si = 1; // selected index
    this.key = 1; // where to put the selected index
  }


  display() {
    super.display();
    super.drawLine(this.si, color(100, 200, 100));
    super.drawLine(this.key, color(200, 200, 100));
  }

  update(){
    if(this.si == this.arr.length){
      return;
    }
    this.key = this.si;

    while(this.arr[this.si] < this.arr[this.key-1] && this.key > 0){
       this.key--;
    }

    let temp = this.arr[this.si];
    for(let i = this.si; i >= this.key; i--){
      this.arr[i] = this.arr[i-1];
    }

    this.arr[this.key] = temp;
    this.si++;
  }



}
