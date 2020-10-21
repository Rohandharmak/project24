class Paper{
    constructer(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            density:0.7,
            friction:1.2
        }
        this.body=Matter.Bodies.circle(x,y,PI/2,options);
        this.width=30;
        this.height=30;
        World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;
        
        
        push();
        translate(paperpos.x,paperpos.y);
        strokeWeight(4);
        stroke("blue");
        fill("green");
        recteMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}
