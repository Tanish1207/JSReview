var string="This is a string";
 console.log(string); 
 var num=100; 
 console.log(num);
  var bool=true; 
  console.log(bool);
   var object;
    console.log(object);
     object=null; 
     console.log(null);
      //examples of array
       //integers 
       var arr1=[1,2,3,4];
        console.log(arr1)
         var arr2=["name",12,true];
          console.log(arr2); 
          //array storing list of arrays 
          var arr3=[[1,2],[2,3],[3,4]];
           console.log(arr3); 
          //access the first element of an array
           console.log(arr3[1]);
           //access the second element of the first element of the array
            console.log(arr3[1][1]);
             arr3.push("my name");
              console.log(arr3); 
              arr3.pop(); 
              console.log(arr3);
        //you write console.log in your code, and then you click inspect element and check on your console tab. For example{console.log("There is a car")} console.log()
        // Above the preload or setup column, you write var and then the variable you are declaring. For example: var score=0; var car 
        // To create a sprite, you can either write createSprite, or you can write refer to your class setup and write it that way
        //x,y,width,height
        // class (name);
        //constructor, World.add, Bodies.circle, display(){}
        // var ground, ground = new Ground(x,y,w,h);
        // if(ground.isTouching(coronavirus)){

        //}
        //for (var i=0; i<400, i++){
            //}
        //function mousePressed(){ //outside function draw

        //}
        //mousePressed();, in function setup
        //First, you have to load the sound or animation in function preload. For example, carSound = loadSound("mp3");. dogImg1 = loadAnimation(dogJumping.png); dogImg1.addAnimation("DogJumping",dogImg);
        //const Engine = Matter.Engine
        //const World = Matter.World;
        //const Body = Matter.Body;
        //const Constraint = Matter.Contraint
        //const Render = Matter.Render;
        //engine = Engine.create();
        //world = engine.world();
        //create the body, and then add it to the world. Usually done inside your constructor
        // Inheritence = Creating new sub classes thats inherits the properties of the baseClass.
        // at the end of the class name, write extends BaseClass; class Bird extends BaseClass
        //Constraint Bodies is the effect faced on one body to the next. For example, a slingshot is an example of a constraint Body because the slingshot and the body are connected
        //json = java script object notation    api = appication programming interface
        //Debugging techniques: console.log(message). To make sure, make a random message, and check console message on 200ok
        //Print statements. Display a message in function draw. A text message is directly displayed on the body. 
        //Comment the coding  Try to remove some lines to find some problems. 
        //Use realtime database in TEST MODE. Also do not enable google analytics(firebase console); In your code, database = firebase.database(); You can use (ref, on, val,);
        //switch rand; case 1. break(); case 2 break(); ...... default.break();
        // var rand = Math.round(randomNumber(1,6))
        //ascii Key values 
        //mouseEvents: mouseDragged, mouseRealeased, mouseX, mouseY
        //p5 major files: sketch.js, p5.play.js, p5.js, index.html, style.css;
        //At the end of the function draw, write drawSprites();
        







const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 33){
        slingshot.attach(bird.body);
    }
}