class Layout extends Container {

  constructor(parent){
    super(parent.x, parent.y, parent.width, parent.height);

    this.parent = parent;
    parent.setLayout(this);

  }

  display(){
    super.display();
  }

}
