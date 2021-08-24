class ComputerPlayer {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("assets/player.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
     
    }
  }
  