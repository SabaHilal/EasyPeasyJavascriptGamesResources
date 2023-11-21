class Drop {
    constructor(x,y,h){
        var options = {
            speed : 30,
            density :1.0
        }
        this.body = Bodies.rectangle(x,y,4,h, options);
        this.h = h;
        World.add(world, this.body);
        }
    

        display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        var b = random (20,255);
        var g = random (20,255);
        var r = random (20,255);
        stroke(b,g,r);
        fill(b,g,r);
        rect(0,0,1,this.h);
        pop();
        }


        isOffScreen(){
        var pos = this.body.position;
        return (pos.y>600);
        }
    
    }