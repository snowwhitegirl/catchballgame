class Character2{
    constructor(x,y,w,h){
        var options = {
            density: 1.5,
            friction: 1.0
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image1 = loadImage("boy.png");
        this.sprite = createSprite(x,y,w,h)

    }
    display(){
        push();
        imageMode(CENTER)
        image(this.image1, 0, 0, this.width, this.height);
        pop();
    }
}