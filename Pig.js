class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,60,60);
    this.image = loadImage("sprites/enemy.png");
 this.Visibility=255
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<3){
      super.display();
    }
   else{
    World.remove(world,this.body)
    Push();
    this.Visibility=this.Visibility-5
    Tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,60,60)
    Pop();
   }
  }

};