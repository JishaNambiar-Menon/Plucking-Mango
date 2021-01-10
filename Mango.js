class Mango{
    constructor(x,y){
        var options={
            isStatic: true,
            density: 1.0
            
        }
        this.image = loadImage("Mango1.png");
        
        this.body= Bodies.circle(x,y,35,options)
        this.radius = 35
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
        
    }
}