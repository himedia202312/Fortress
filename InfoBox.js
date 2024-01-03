
class InfoBox extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);

        this.div.style.fontSize=100+"px";
        this.div.style.color="red";
        this.div.style.fontWeight="bold";
        this.div.style.color="red";
    }    

    printMsg(msg){
        this.div.innerTexxt=msg;
    }
}