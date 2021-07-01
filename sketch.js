var seaImg , sea;
var ship1, ship, ship2;

function preload()
{
    ship1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
    ship2 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
    seaImg = loadImage("sea.png");
}

function setup()
{
    createCanvas(400,400);
    // creating sea
    sea = createSprite(400,300);
    sea.addImage(seaImg);
    sea.velocityX= -3;
    sea.scale = 0.4;

    ship = createSprite(130,200,30,30);
    ship.addAnimation("moving ship" , ship1);
    ship.scale = 0.4;
}

function draw() 
{
    //set background color 
    background("blue");
  
    if(sea.x<0) 
    {
       sea.x = sea.width/2;
    }

    if(keyDown("space"))
    {
        ship.addAnimation("moving ship" , ship2);
    }

    drawSprites();
}