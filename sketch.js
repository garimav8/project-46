var backgroundImg
var unicornImg
var unicorn
var unicornJump
var unicornDown
var branch1
var branch2
var branch3

function preload(){
  backgroundImg = loadImage("images/bg image.png")
  unicornImg = loadAnimation("images/unicorn1.png","images/unicorn3.png")
  unicornJump = loadAnimation("images/unicorn2.png")
  unicornDown = loadAnimation("images/unicorn4.png")
  gold1Img = loadImage("images/gold1.png")
  branch1Img = loadImage("images/branch1.png")
  branch2Img = loadImage("images/branch2.png")
  branch3Img = loadImage("images/branch3.png")
  flowerImg = loadImage("images/flower.png")
  cloudImg = loadImage("images/cloud.png")
}

function setup(){
    createCanvas(1280,600)

    unicorn = createSprite(150,400,10,10)
    unicorn.addAnimation("unicorn",unicornImg)
    unicorn.addAnimation("unicornUp",unicornJump)
    unicorn.addAnimation("unicornDown",unicornDown)
    unicorn.scale = 0.5

  //  gold1 = createSprite(300,300,10,10)
   // gold1.addImage("gold1",gold1Img)
   // gold1.scale = 0.1

    

  //  cloud = createSprite(700,200,10,10)
   // cloud.addImage("cloud",cloudImg)
   // cloud.scale = 0.6
    //unicorn.debug = true
    //unicorn.setCollider("rectangle",0,0,200,280)
   
    branchGroup = new Group();
}

function draw(){
  background(backgroundImg)

  if(keyDown("SPACE")){
      unicorn.velocityY  = -8
      unicorn.velocityX = 0
      unicorn.changeAnimation("unicornUp",unicornJump)
  }

  if(unicorn.velocityY>0){
   unicorn.changeAnimation("unicornDown",unicornDown)
  }

 
  unicorn.velocityY = unicorn.velocityY +1
  unicorn.collide(branchGroup)
  unicorn.x = 150

  if (unicorn.isTouching(branchGroup)){
    unicorn.changeAnimation("unicorn",unicornImg)
   }

  spawnlogs()
   
  drawSprites();
  
}

function spawnlogs(){
 if(frameCount%150 === 0){

  var y = Math.round(random(350,550)) 
   branch = createSprite(1500,y,150,50)
   branch.scale = 3
   branch.velocityX = -10
   branch.setCollider('rectangle',0,0,200,35)
   var num = Math.round(random(1,3))
   
   switch(num){
    case 1 : branch.addImage("branch1",branch1Img)
    branch.setCollider('rectangle',0,0,200,20)
    break;

    case 2 :  branch.addImage("branch2",branch2Img)
    branch.setCollider('rectangle',0,0,200,35)
    break;

    case 3 :  branch.addImage("branch3",branch3Img)
    branch.setCollider('rectangle',0,0,200,35)
    break;
    default: break
   }
    
  var angle = Math.round(random(-10,10))
    branch.rotation = angle
   branch.debug = true

var flow= Math.round(random(1,5))

if(flow===1){
var x = Math.round(random(-50,50))
    var flower = createSprite(branch.x + x, branch.y - 160,10,10)
    flower.addImage("flower",flowerImg)
    flower.scale = 0.5
    flower.velocityX = branch.velocityX
    flower.depth= branch.depth
    flower.depth++

}

   branchGroup.add(branch)

   
 }
     
}