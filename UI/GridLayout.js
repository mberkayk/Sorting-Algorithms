class GridLayout extends Layout {

  constructor(parent, c, r) { //Parent Component, columns, rows
    super(parent);

    this.rows = r;
    this.columns = c;

    this.numberOfCells = this.rows * this.columns;
    this.cells = [];
    for (let i = 0; i < this.numberOfCells; i++) {
      this.cells.push(false); //Empty
    }

    this.calculateGridSize();

//  compsGridIndex[a]=index of the grid cell component is in. a = component's index in comps array)
    this.compsGridAtts = [];

    this.padding = 0;

  }

  addItem(c, x, y, w, h) { // Component, GridX, GridY, horizontal span, vertical span

    let index = y * this.columns + x; // index = which grid cell the x,y denotes
    let available = false; // if the required cells are empty

    if (arguments.length == 3) {

      if (this.checkIfOccupied(index) == false) { // if empty

        this.cells[index] = true; //occupied
        available = true;

      } else { // if the cell is occupied
        console.log('Grid cell is already occupied!');
      }

    }else if (arguments.length == 5) {

      let stack = [];

      loop:
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          let cellX = x + j;
          let cellY = y + i;
          let index = cellX + cellY * this.columns;

          if(this.checkIfOccupied(index) == false){ // if not occupied
            stack.push(index);
          }else{
            break loop;
          }
        }
      }

      let area = w*h; // Area of the component in the grid
      if(stack.length == area){ // if all the required cells are empty
        for(let i = 0; i < area; i++){
          this.cells[stack.pop()] = true; //occupied
        }
        available = true;
      }

    } // end of (else if length == 5)

    if(available){
      let cx = this.x + x * this.gridWidth; //component x (screen x)
      let cy = this.y + y * this.gridHeight; //component y (screen y)
      c.setPos(cx, cy);
      c.resizeEvent(this.gridWidth * w, this.gridHeight * h);
      super.addItem(c);

      if(h == undefined) h = 1;
      if(w == undefined) w = 1;
      this.compsGridAtts.push({cellIndex: index, gridX: x, gridY: y, hSpan: w, vSpan: h});

    }

  } // end of addItem()

  checkIfOccupied(i){
    return this.cells[i];
  }

  resizeEvent(w, h){
    this.setPos(this.parent.x, this.parent.y);
    this.setSize(w, h);
    this.calculateGridSize();

    for(let i = 0; i < this.itemCount; i++){
      this.comps[i].setPos(this.x + this.padding + this.compsGridAtts[i].gridX * this.gridWidth,
                  this.y + this.padding + this.compsGridAtts[i].gridY * this.gridHeight);

      this.comps[i].resizeEvent((this.gridWidth * this.compsGridAtts[i].hSpan) - 2 * this.padding,
           (this.gridHeight * this.compsGridAtts[i].vSpan) - 2 * this.padding);

    }//end of for loop

  }// end of resizeEvent

  calculateGridSize(){
    this.gridWidth = this.width / this.columns;
    this.gridHeight = this.height / this.rows;
  }

  setPadding(p){
    this.padding = p;
    this.resizeEvent(this.width, this.height);
  }

  mousePressed(x, y){
    for(let i = 0; i < this.itemCount; i++){

      if(x >= this.comps[i].x && x < this.comps[i].x + this.comps[i].width){
        if(y >= this.comps[i].y && y < this.comps[i].y + this.comps[i].height){
          this.comps[i].mousePressed(x, y);
        }
      }

    }
  }

}
