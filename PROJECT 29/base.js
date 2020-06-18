class Base
{
    constructor(x, y)
    {
        var options = {
            isStatic:true,
            friction:2
        }
        
        this.body = Bodies.rectangle(x, y, 300, 10, options);
        this.width = 300;
        this.height = 10;
        World.add(world,this.body); 
    }

    display() 
    {
        rectMode(CENTER);
        strokeWeight(3);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}