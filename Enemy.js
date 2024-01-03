class Enemy extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);

        this.div.style.background="blue";
        this.div.style.borderRadius=50+"%";
    }

    move(){
        this.x += this.velX;
        this.y += this.velY;

        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }

}