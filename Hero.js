class Hero extends GameObject{

    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);

        this.div.style.background="red";
        this.r=0;
        this.power=1;
        this.createGun();
    }    

    createGun(){
        this.gun = document.createElement("div");
        this.gun.style.background="green";
        
        
        this.gun.style.position="absolute";
        //this.gun.style.top= this.height*(5/100)+"px";        
        this.gun.style.left=-(this.width*(50/100))+"px";
        this.gun.style.top= (this.height*(45/100))+"px";        
        
        this.gun.style.width=130+"px";
        this.gun.style.height=10+"px";
        
        this.gun.style.borderRadius=30+"%";
        
        this.gun.style.transform="rotate(180deg)";

        this.div.appendChild(this.gun);
    }

    setDegree(n){
        //좌측인 경우 시각적 효과 때문에 - 곱함 
        this.r += n;
        infoBox.div.innerText=this.r+"˚";

        this.gun.style.transform="rotate("+(this.r)+"deg)";
              
    }
}