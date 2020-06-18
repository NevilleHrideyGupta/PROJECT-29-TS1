class Obj2
{
    constructor(x, y)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }

        this.body = Bodies.rectangle(x, y, 25, 25, options);
        this.width = 25;
        this.height = 25;
        World.add(world,this.body);
        
    }

    display(){      
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
    }
}