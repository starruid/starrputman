
let f1;

let rot;


function setup() {
  createCanvas(1000,1000);
  fill(255);

  f1= new spFishLad(color(200),color(100),100,100,0,0.1);
                //lc,lc2,lc4,llxo,llyo,lrot,lsc

  gang = new Array(15);

  for (let i = 0; i < gang.length; i++) {
gang[i] = new spFishLad(color(random(100),random(150),random(200)),color(random(200),random(200),random(200)),color(random(200),random(200),random(200)),
width/2, height/2,random(-360,360)+5,0.5,0,0);
    

    
  }

}

function draw() {
  background(25, 75, 112);

  for (let i = 0; i <gang.length; i++) {

    gang[i].displayFish();
    gang[i].updateFish();
    

  }



//f1.displayFish();

}


function keyPressed(){
  if( key == 's'||key == 'S'){
  
  
    for (let i = 0; i < gang.length; i++) {
      gang[i].spinFish();
      
    }

  }
  if( key == 't'||key == 'T'){
    for (let i = 0; i < gang.length; i++) {
      gang[i].scatterFish();
    }
 
  }
  if( key == 'd'||key == 'D'){
    for (let i = 0; i < gang.length; i++) {
      gang[i].toggleStache();
    }
  }
  if( key == 'x'||key == 'X'){
    for (let i = 0; i < gang.length; i++) {
      gang[i].pauseFish();

    }
  }
  if( key == 'b'||key == 'B'){
    for (let i = 0; i < gang.length; i++) {
      gang[i].resetPose();
      
    }
  }

}