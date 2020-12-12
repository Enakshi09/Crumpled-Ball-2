class paper{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
         
      }
      this.image=loadImage("paperIMG.png")
      this.body=Bodies.circle(x,y,radius,options)
      this.width=width
      this.height=height
      this.radius=radius
      World.add(world,this.body)
    }

      display() {
          var pos=this.body.position
          push()
          translate(pos.x,pos.y) 
          fill("yellow") 
          rectMode(CENTER)
          image(this.image,0,0,this.radius,this.radius)
          pop() 
      }


    
}