class Container extends Component {

  constructor(x, y, w, h){
    super(x, y, w, h);
    this.comps = [];
    this.itemCount = 0;
  }
  
  display(){
    for(let i = 0; i < this.itemCount; i++){
      this.comps[i].display();
    }
  }
  
  addItem(item){
    this.itemCount++;
    this.comps = this.comps.concat(item);
  }
  
}
