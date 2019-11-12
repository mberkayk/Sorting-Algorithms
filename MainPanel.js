class MainPanel extends Panel {


  constructor(w, h){ // width and heigth
    super(0, 0, w, h);

    this.grid = new GridLayout(this, 1, 20);
    this.toolbar = new ToolbarPanel(0, 0, w, h);
    this.fieldPanel = new FieldPanel(20, 20, w, h);
    this.grid.addItem(this.fieldPanel, 0, 1, 1, 19);
    this.grid.addItem(this.toolbar, 0, 0, 1, 1);
  }

  display(){
    super.display();
  }

  resizeEvent(w,h){
    super.resizeEvent(w,h);
  }

  mousePressed(x, y){
    super.mousePressed(x, y);
  }

}
