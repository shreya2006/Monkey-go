class Slingshot {
constructor(bodyA, pointB){
    var options ={
        bodyA: bodyA, 
        pointB: pointB,
        length: 10,
        stiffness: 0.04
    }

    this.pointB = pointB
    this.Slingshot = Constraint.create(options)
    World.add(world, this.Slingshot)
}

fly(){
    this.Slingshot.bodyA = null;
}

display(){
    if(this.Slingshot.bodyA){
        line(this.Slingshot.bodyA.position.x, this.Slingshot.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
    
    
}
}