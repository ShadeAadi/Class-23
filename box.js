class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.7,
        'friction':1.0,
        'density':0.6
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rotate(this.body.angle);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}