class Ball{
    constructor(x,y){
        var options = {
            density: 1.5,
            friction: 1.0,
            restitution: 1.0
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 10, options);
        this.sprite= createSprite(x,y,10,10);
    }
    display(){
        push();
        ellipse(10, this.x, this.y);
        ellipseMode(CENTER);
        pop();
    }
}