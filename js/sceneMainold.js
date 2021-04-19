class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload()
  {
    //load images or sounds
    //this.load.image("key","path")
    this.load.image("face", "images/face.png")
  }
  create() {
    console.log("message");
      //define objects like spaceships or bullets
       this.face = this.add.image(0, 0, "face");
       //screen origin
      //this.face.setOrigin(0,0)
    //center face
        this.face.x=game.config.width/2;
        this.face.y=game.config.height/2;
    //  this.face.alpha=.5; //0vand 1
    //  this.face.angle=45
    //  this.face.scaleX=.5;
    //  this.face.scaleY=.5;
    //  this.face.displayWidth=100;
    //  this.face.displayHeigth=50;
      //proportional
  //    this.face.displayWidth=200;
  //    this.face.scaleY=this.face.scaleX;
  }
  update() {
    // everything that is constantly checked
  }
}
