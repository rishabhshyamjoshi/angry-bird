class Bird{
    constructor(x, y, r){
        this.body = Matter.Bodies.circle(x,y,r);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.r = r;
        
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y); 
    fill("127");
    circle(0,0,this.r);
    pop();
} 
          

}