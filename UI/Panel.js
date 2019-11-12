class Panel extends Container {

  constructor(x, y, w, h){
    super(x, y, w, h);

    this.layout;
    this.titleBar = {minimumHeight:30};
  }

  display(){
    super.display();

    if(this.titleBar.title != undefined){
      fill(255);
      textSize(this.width / 30);
      text(this.titleBar.title, this.x + this.width/3, this.y + this.titleBar.height/3);
    }
    if(this.layout != undefined){
      this.layout.display();
    }
  }

  setLayout(layout){
    this.layout = layout;
  }

  resizeEvent(w, h){
    this.setSize(w, h);
    if(this.layout != undefined){

      if(this.titleBar.height == undefined){
        this.layout.resizeEvent(w,h);
      }else{
        this.layout.resizeEvent(w, h-this.titleBar.height);
      }

    }

  }

  setTitle(title){
     this.titleBar.title = title;
     if(this.height < this.titleBar.minimumHeight * 3.5){
       this.titleBar.height = this.titleBar.minimumHeight;
     }else{
       this.titleBar.height = 20;
     }
   }

   mousePressed(x, y){
     if(this.layout != undefined){
       this.layout.mousePressed(x, y);
     }
   }

}
