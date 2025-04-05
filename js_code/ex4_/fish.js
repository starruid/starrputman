

class spFishLad {

    c;
    c2;
    c4;
  
    lx;
    ly;
    sx;
    sy;

    rot;
    sc;
    tailS;
  
    showStache;
    count;
    isrot;
    scatter;
    reset;

 constructor(lc,lc2,lc4,llx,lly,lrot,lsc,ltail,lss) {
    this.c = lc;
    this.c2 = lc2;
    this.c4 = lc4;
 
    this.lx =llx;
    this.ly =lly;
    this.rot = lrot;
    this.sc =lsc;
    this.showStache = lss;

    this.count =0;
    this.isrot = 0;
    this.tailS = ltail;
    this.scatter = 0;
    this.reset =0;

    this.sx = random(-10,10);
    this.sy = random(-10,10);

    console.log("fish");
    }



 displayFish() {
    push();
    translate(this.lx,this.ly);
    rotate(radians(this.rot));
    scale(this.sc);
   
    
    this.tail(this.c4,290,450,this.tailS,1);
    this.body(this.c,this.c2,270, 250);
    this.head(this.c,200,100,0,1);
  
    if(this.showStache == 1){
      this.stache(color(0,0,100),250,90,1.1);

      console.log("stache");
    }
   
    pop();
  }
updateFish() {
  if(this.isrot == 1){

    this.rot -=1;
  }
    if(this.count ==1){
      this.tailS +=4;
    }
  if(this.scatter ==1){
      this.lx += this.sx;
      this.ly += this.sy;
      console.log("AHHHHHHHHHHHH");
     
    } 
    if(this.reset ==1){
    //left
       if (this.lx < -10){
    this.lx = width;
}
 //right
 if (this.lx > width){
    this.lx = -10;
}
//top
if (this.ly < -10){
    this.ly = height;
}
 //bottom
 if (this.ly > height){
    this.ly = -10;
}


    }
  }



  
stache(s,lxo,lyo,sc){
  push();
    translate(lxo,lyo);
    scale(sc);
  noStroke();
      fill(s);
      ellipse(27,105,30,10);
      ellipse(47,105,30,10);

      pop();
}


   body(c,c2,lxo,lyo,rot,sc) {
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    fill(c);
    noStroke();
    rect(0,0,40,50);
    rect(-50,50,140,150,30);
    ellipse(-50,75,70,50);
    ellipse(90,75,70,50);
    this.arm(c,-85,75,0,1);
    this.arm(c,95,75,0,1);
  
    this.shirt(c2,-55,45,0,2);
  
    pop();
  }
  
   arm(c,lxo,lyo,rot,sc){
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    fill(c);
    noStroke();
    rect(0,0,30,150);
    ellipse(15,150,50,60);
    rect(0,150,5,70);
    rect(8,150,5,70);
    rect(17,150,5,70);
    rect(25,150,5,70);
  
  pop();
  }
  

  
   head(c,lxo,lyo,rot,sc) {
  
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    //----ears
    fill(c);
    this.ear(c,-30,85,-20,1.8);
    this.ear2(c,210,85,20);
  
    //----headbase
    noStroke();
    rect(0,0,180,180,75);
   
    //----eyes
    stroke(0);
    fill(20,80,250);
    this.eye(40,60);
    this.eye(140,60);
  
    //----nose&mouth
    fill(78, 52, 59);
    this.mouth(55,125,0,1.2);
    this.nose(color(0,50),78,65,0,1.2);
    
    pop();
  }
  
   shirt(c2,lxo,lyo,rot,sc){
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    fill(c2);
    rect(0,0,75,50,50,50,10,10);
  
    pop();
  }
  
   eye(lxo,lyo,rot,sc)  {
  
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
   
    fill(255);
    strokeWeight(2);
    ellipse(0,0,40,30);
    noStroke();
    fill(48,213,200);
    ellipse(0,0,25,25);
    fill(0,255,255);
    ellipse(0,4,20,15);
    fill(0);
    ellipse(0,0,10,10);
    fill(255);
    ellipse(3,-3,5,5);
  
    pop();
  }
  
  
  
   nose(c3,lxo,lyo,rot,sc) {
  
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    noStroke();
    fill(c3);
    triangle(0,15,10,-10,20,15);
    triangle(0,15,20,15,10,25);
  
    pop();
  }
  
  
  
   ear(c,lxo,lyo,rot,sc) {
  
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    noStroke();
    fill(c);
    triangle(5,15,0,-30,25,10);
    triangle(10,25,-15,0,25,10);
    triangle(25,35,-10,30,25,10);
  
    pop();
  }
  
  
  
  
   ear2(c,lxo,lyo,rot) {
  
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(-1.8,1.8);
  
    noStroke();
    fill(c);
    triangle(5,15,0,-30,25,10);
    triangle(10,25,-15,0,25,10);
    triangle(25,35,-10,30,25,10);
  
    pop();
  }
  
  
  
   tail(c4,lxo,lyo,rot,sc) {
  
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    noStroke();
    fill(c4);
    ellipse(0,0,150,150)
    rect(-75,0,150,20);
    triangle(-75,20,75,20,0,270);
    triangle(-75,295,75,295,0,270);
  
    pop();
  }
  
   mouth(lxo,lyo,rot,sc) {
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
    fill(78, 52, 59);
    rect(0,0,60,30,35);
  
    fill(255);
    this.teeth(0,0);
    this.teeth(10,0);
    this.teeth(20,0);
    this.teeth(30,0);
  
    this.teeth(30,30,180);
    this.teeth(40,30,180);
    this.teeth(50,30,180);
    this.teeth(60,30,180);
    pop();
  }
  
   teeth(lxo,lyo,rot,sc) {
    push();
    translate(lxo,lyo);
    rotate(radians(rot));
    scale(sc);
  
    fill(255);
    triangle(10,0,20,0,15,10);
    pop();
   }



 spinFish(){

  this.isrot = 1;
  this.count = 1;
    console.log("spin");
  
  }

scatterFish(){

  this.scatter =1;
  this.count = 1;
  console.log("GET OUT");

}

toggleStache(){
  if(this.showStache ==1){
    this.showStache = 0;
}else{
this.showStache = 1;
}

}

resetPose(){
  if(this.reset ==1){
    this.reset = 0;
}else{
this.reset = 1;
}

}

pauseFish(){
  this.isrot = 0;
  this.count =0;
  this.scatter = 0;
  console.log("HALT");
}

}