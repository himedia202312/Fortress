class Bullet extends GameObject{

    constructor(container, src, x, y, width, height, velX, velY, power){
        super(container, src, x, y, width, height, velX, velY);

        this.div.style.filter="blur(5)";
        this.div.style.background="red";
        this.div.style.borderRadius=50+"%";


        
        this.power=power;
    }

    move(){
        this.velY += g+( 1.2/gage.value); //중력 적용
        console.log(this.velY);

        this.x += (this.velX * this.power);
        this.y += (this.velY * this.power);

        for(let i=0;i<enemyArray.length;i++){
            let result = collisionCheck(this, enemyArray[i]);

            if(result){
                try{                
                    this.container.removeChild(this.div);
                    bulletArray.splice(bulletArray.indexOf(this), 1);

                    this.container.removeChild(enemyArray[i].div);
                    enemyArray.splice(i,1);

                    gage.flag=true; //게이지 다시 작동

                }catch(e){
                    console.log("이미 지워졌습니다");
                }
                

                break;
            }
        }

        //화면 벗어나면 죽이기 
        if(this.x <0 || this.y >900){
            try{
                this.container.removeChild(this.div);
                bulletArray.splice(bulletArray.indexOf(this), 1);
                gage.flag=true; //게이지 다시 작동
            }catch(e){
                console.log("삭제 시 에러 발생, 현재 총알 배열 ", bulletArray.length);
            }
        }
        
        

        this.div.style.left= this.x+"px";
        this.div.style.top= this.y+"px";
    }
}