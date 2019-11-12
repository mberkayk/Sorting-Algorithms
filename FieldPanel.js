class FieldPanel extends Panel {

  constructor(x, y, w, h) {
    super(x, y, w, h);

    this.sortPanels = [];
    this.grid = new GridLayout(this, 2, 2);
    this.grid.setPadding(20);

    this.arr = [];
    this.arr_size = 20;
    let maxValue = 1000; //max value of an array item
    for(let i = 0; i < this.arr_size; i++) {
      this.arr.push(floor(random(0, maxValue)));
    }

    this.staticPanel = new SortPanel(this.arr, maxValue);
    this.selectionSortPanel = new SelectionSort(this.arr, maxValue);
    this.insertionSortPanel = new InsertionSort(this.arr, maxValue);
    this.addPanel(this.staticPanel, 0, 0);
    this.addPanel(this.selectionSortPanel, 1, 0);
    this.addPanel(this.insertionSortPanel, 0, 1);
    this.staticPanel.setTitle('Static Panel');
    this.selectionSortPanel.setTitle('Selection Sort Panel');
    this.insertionSortPanel.setTitle('Insertion Sort Panel');
  }

  display(){
    super.display();
  }

  addPanel(sortPanel, x, y) {
    this.sortPanels.push(sortPanel);
    if(this.grid.numberOfCells < this.sortPanels.length){
      console.log('not enough empty grid cells!');
      return;
    }
    for(let i = 0; i < this.grid.numberOfCells; i++){
      if(this.grid.cells[i] == false){
        this.grid.addItem(sortPanel, x, y);
        break;
      }
    }
  }

  resizeEvent(w,h){
    super.resizeEvent(w, h);
  }

  mousePressed(x, y){
    super.mousePressed(x,y);
    for(let i = 0; i < this.sortPanels.length; i++){
      this.sortPanels[i].update();
    }
  }



}
