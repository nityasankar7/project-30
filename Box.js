class Box  {
    
      constructor(x, y, width, height, angle) {
          var options = {
            
              'restitution':0.8,
              'friction':1.0,
              'density':1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.Visiblity = 255;
          this.width = width;
          this.height = height;
          
          World.add(world, this.body);
        }
        score(){
        if(this.Visiblity<0 && this.Visiblity>-105 ){

          score++;
        }

        }
       
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          
       
          if(this.body.speed < 3){
            translate(pos.x, pos.y);
        rotate(angle);
         rectMode(CENTER)
          fill("Blue");
          rect(0, 0, this.width, this.height);
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             
             pop();
           }
         
          
          pop();
        }
  }
    
  
  
  