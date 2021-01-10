class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA : body1,
            pointB : point2,
            length : 5,
            stiffness: 0.8
        }
        this.pointB=point2;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);      
        
    
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA= null;
    }


    
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(4);
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
       
    }
   

}