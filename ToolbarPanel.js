class ToolbarPanel extends Panel {


  constructor(x, y, w, h){
    super(x, y, w, h);
  }

  display(){
    super.display();

    fill(200, 12, 50);
    rect(this.x, this.y, this.width, this.height);

  }

  resizeEvent(w, h){
    super.resizeEvent(w, h);
    // console.log('Toolbar resized');
  }

}
