class Snow {
    constructor (x,y,width,height) {
        var option =  {
            //Changed friction to frictionAir to make snowflakes fall correctly
            frictionAir : 0.2,
            density : 0.2,
            restitution : 0.8,

        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow5.webp");
        World.add(world ,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    
}
 