class Man {
    constructor(x,y){
      var options = {
          isStatic:false
      }

      this.body = Bodies.rectangle(x,y,30,90,options);
      this.width = 30;
      this.height =90;
      this.image1 = loadImage("images/man.png");
      this.image2 = loadImage("images/fallingman.png");
      World.add(world,this.body);

   }

   display(){
       push();
       camera.position.y = this.body.position.y;
       translate(this.body.position.x, this.body.position.y);
       imageMode(CENTER);
       image(this.image1,0,0,100,100);
       pop();

       
   }
}