class InsertionSort extends SortPanel {

  constructor(arr_, maxValue){
    super(arr_, maxValue);
    this.si = 1; // selected index
    this.key = 1; // where to put the selected index

    this.state = false; // false if choosing the key
                        // true if putting the selected item in the key spot
                        // and shifting everything to the right
  }


  display() {
    super.display();
                            //green
    super.drawLine(this.si, color(100, 200, 100));
    if(this.state == true){
                               //yellow
      super.drawLine(this.key, color(200, 200, 100));
    }
  }

  update(){
    if(this.si == this.arr.length){
      this.sorted = true;
      return;
    }
    if(this.state == false){ // if choosing the key
      this.key = this.si;

      //choosing where to put the item with the selected index
      //assinging that value to key
      while(this.arr[this.si] < this.arr[this.key-1] && this.key > 0){
         this.key--;
      }

      this.state = true;
    }else { // if state is true
      //Shifting everything to the right
      let temp = this.arr[this.si];
      for(let i = this.si; i > this.key; i--){
        this.arr[i] = this.arr[i-1];
      }

      //Assinging selected index to the key
      this.arr[this.key] = temp;
      this.si++;

      this.state = false;
    }

  }

}
