class Box
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:false
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos= this.body.position;
        var angle= this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ()
           
        class Ground{

            constructor(x,y,width,height)
            {
               var options={
                   'isStatic':true
        
               }
              this.body=Bodies.rectangle(x,y,width,height,options);
              this.width= width;
              this.height=height
              
          
              World.add(world,this.body)
            }
          
            display()
            {
              var  pos=this.body.position
              
              fill ("red")
             rectMode(CENTER);
             rect(pos.x,pos.y,this.width,this.height)
             
          
            }
          
          
          }
        
    }
}

