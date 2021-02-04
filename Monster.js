class Monster{
    constructor(x,y,r){
        var options={
            density:1,
            
            isStatic:false
            
        };
        this.x=x
        this.y=y
        this.r=r
       
    this.image=loadImage("images/Monster-01.png");
    this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
     World.add(world,this.body);

    }
   
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

}