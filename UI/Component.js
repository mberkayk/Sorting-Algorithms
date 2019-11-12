class Component {

  constructor(x, y, w, h){

    if(arguments.length == 0){
      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
    }else if(arguments.length == 2){
      this.x = x;
      this.y = y;
      this.width = 0;
      this.height = 0;
    }else if (arguments.length == 4){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    }

  }

  setPos(x, y){
    this.x = x;
    this.y = y;
  }

  setSize(w, h){
    this.width = w;
    this.height = h;
  }

  display(){}

  mousePressed(x, y){}

}
