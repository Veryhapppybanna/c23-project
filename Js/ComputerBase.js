class ComputarBase{
    constructor(x ,y, width, height){
      var options = {
          isStatic = true
      };
      
      this.body = Bodies.rectangle(x, y, width, height, eoption);
      this.width = width;
      this.height = weight;
      this.image = loadImage("./assests/base2.png");

      World.add(world, this.body);
    }

    display(){
        var pos = this.body.positions;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(center)
        image(this.image, 0, 0, this.width, this.height)

        pop();
    }

}