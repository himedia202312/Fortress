
class Gage extends GameObject{
    constructor(container, src, x, y, width, height,  fillX){
        super(container, src, x, y, width, height, 0, 0);
    
        this.value=0;
        this.fillX=fillX;
        this.flag=true;
        this.direct=true; //방향 

        this.div.style.border="1px solid red";

        this.gage=document.createElement("div");
        this.gage.style.width=this.value+"%";
        this.gage.style.height=this.height+"px";
        this.gage.style.background="gray";

        this.div.appendChild(this.gage);
    }
    
    move(){
        if(this.flag){
            if(this.direct){
                this.value += this.fillX;
            }else{
                this.value -= this.fillX;
            }
    
            if(this.value >=100 || this.value<=0){
                this.direct=!this.direct;
            }
    
            this.gage.style.width = this.value+"%";
        }
    }
}