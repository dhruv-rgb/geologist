class iron{
    constructor(x,y){
    var options ={
    restitution:0.8,
    friction:3,
    density:30

    } 
    this.body = Bodies.rectangle (x,y,100,50,options) 
    this.width= 100
    this.height =50
    World.add(world,this.body) 
    }
    display(){
    var pos = this.body.position ;
    push()
    ;translate(pos.x,pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("orange");
            rect(0,0,this.width,this.height)
            pop()
    }
}