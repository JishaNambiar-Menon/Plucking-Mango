class Stone{
    constructor(x,y){
        var options={
            isStatic: false,
            density: 1.5
        }
        this.image = loadImage("stone.png")
        this.body = Bodies.circle(x,y,50,options)
        this.radius = 50;
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
       //this.body.position.x = mouseX;
        //this.body.position.y = mouseY
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipseMode(RADIUS)
        //ellipse(0,0,this.radius,this.radius);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}