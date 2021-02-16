class Chain{
    constructor(A1,A2){
        var options = {
            bodyA : A1,
            bodyB : A2,
            stiffness : 0.04,
            length : 20
        }
        
        this.chain    =  Matter.Constraint.create(options)
        World.add(world, this.chain);
    }
    display()
    {
        strokeWeight(0.1);
        line (this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y)
    }
    }