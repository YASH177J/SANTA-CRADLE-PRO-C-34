class Roof{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.0,
            'friction':1.0,
            'density':1.0,
            'isStatic':true,
             }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("text.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image,0,0,300,50);
        pop();
      }
  }