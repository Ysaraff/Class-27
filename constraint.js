class Constraint{
    constructor(bodyA, bodyB){
        var options ={
            bodyA: bodyA, bodyB: bodyB, stiffness: 0.5, length: 150
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    line1(){
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}