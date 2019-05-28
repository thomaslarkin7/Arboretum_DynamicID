//DESN2002 Dynamic ID Project
//The colouring and positioning of leaves within this  'tree' logo is dependent on the input 'season'

let month;

let r = 18; //number of rows in the triangular grid
let c = 18; //number of columns in the triangular grid
//let season='winter';
let autCol;
let aC;
let wC;
let sC;
//Month can be 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

function setup() {
    var cnv = createCanvas(400, 400);
    cnv.parent("myContainer");    
    //cnv.position(100, 50);
}

function draw() {
  //set the width and height of a grid element
console.log("inside the draw");
    var x = document.getElementById("eventDate").value;
    //console.log("the date is ", x);
    month = x.slice(5, 7)
  let gridW = 400/c;
  let gridH = 400/r;
  background(255);

    
  //Assign arrays of coordinates for each component of the tree
  
  let branchRArray = [[19, 15], [20, 15], [21, 15], [22, 14], [23, 14]]; //Rightmost branch

  let stumpArray = [[15, 17], [16, 17], [17, 17], [18, 17], [16, 16], [17, 16], [18, 16], [19, 16], [15, 15], [16, 15], [17, 15], [18, 15], [16, 14], [17, 14], [18, 14], [19, 14], [19, 15], [20, 15], [21, 15], [22, 14], [23, 14], [15, 14], [14, 14], [13, 14], [12, 14], [11, 14], [10, 13], [9, 13], [10, 12], [9, 12], [18, 13], [19, 13], [20, 12], [21, 12], [22, 12], [23, 12], [22, 11], [23, 11], [24, 11], [24, 10], [23, 10], [22, 10], [21, 10], [20, 9], [19, 9], [18, 9], [17, 9], [18, 8], [19, 8], [19, 7], [18, 7], [25, 11], [26, 11], [27, 11], [28, 10], [27, 10], [26, 9], [25, 9], [26, 8], [27, 8], [15, 13], [16, 13], [16, 12], [15, 12], [14, 12], [13, 12], [17, 12], [16, 11], [17, 11], [12, 11], [11, 11], [12, 10], [9, 10], [11, 10], [9, 10], [13, 10], [10, 10], [12, 9], [13, 9], [14, 8], [13, 8]]; //Tree stump
  
    
//-------------Leaves on Tree--------
  
  let leafArray = [[14, 15], [13, 15], [12, 15], [11, 15], [10, 15], [9, 15], [9, 14], [10, 14], [8, 13], [7, 13], [7, 12], [8, 12], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [11, 12], [12, 12], [11, 13], [12, 13], [13, 13], [14, 13], [8, 10], [7, 10], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [11, 8], [12, 8], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7], [16, 8], [15, 8], [14, 9], [15, 9], [14, 10], [15, 10], [13, 11], [14, 11], [15, 11], [18, 10], [19, 10], [20, 10], [18, 11], [19, 11], [19, 12], [20, 11], [21, 11], [17, 8], [16, 7], [17, 7], [20, 7], [21, 7], [20, 8], [21, 8], [22, 8], [21, 9], [22, 9], [23, 9], [24, 9], [25, 10], [26, 10], [24, 8], [25, 8], [24, 7], [25, 7], [26, 7], [27, 7], [28, 7], [18, 6], [19, 6], [20,6], [21, 6], [22, 6], [28, 8], [29, 8], [27, 9], [28, 9], [29, 10], [30, 10], [28, 11], [29, 11], [24, 12], [25, 12], [26, 12], [27, 12], [28, 12], [29, 12], [20, 13], [21, 13], [22, 13], [23, 13], [20, 14], [21, 14], [24, 14], [25, 14], [22, 15], [23, 15], [24, 13], [25, 13]];
  
  let autumnFArray = [[4, 12], [2, 13], [6, 14], [3, 15], [7, 15], [29, 13], [27, 14], [29, 15], [27, 15], [24, 16], [29, 16], [30, 16]]; //Falling autumn leaves
  
  let autumnPArray = [[32, 17], [30, 17], [29, 17], [28, 17], [27, 17], [26, 17], [22, 17],  [4, 17], [6, 17], [7, 17], [8, 17], [12, 17]]; //Piled autumn leaves
  
  //colourT(5,5 , 253, 0, 0);
  //Generate seasonal leaf functions
  
  for (var l = 0; l<stumpArray.length; l++){
    colourT(stumpArray[l][0], stumpArray[l][1], 89, 52, 3);} //Draw the tree stump
  
    if (month == 3||month == 4|| month == 5){
      for (var j = 0; j < autumnPArray.length; j++){
        let randP = int(random(0, 3));
        
        if (randP == 0){
          colourT(autumnPArray[j][0], autumnPArray[j][1], 153, 76, 32);}
          
        if (randP == 1){
          colourT(autumnPArray[j][0], autumnPArray[j][1], 239, 170, 46);}
      
        if (randP == 2){
          colourT(autumnPArray[j][0], autumnPArray[j][1], 204, 211, 79);}
      } //end for loop 'leaf pile'
    
    for (let kF = 0; kF < autumnFArray.length; kF++){
      let randF = int(random(0, 8));
  
    if (randF == 0){
      colourT(autumnFArray[kF][0], autumnFArray[kF][1], 188, 84, 55);}
      
    if (randF == 1){
      colourT(autumnFArray[kF][0], autumnFArray[kF][1], 216, 138, 85);}
      
    if (randF == 2){
      colourT(autumnFArray[kF][0], autumnFArray[kF][1], 249, 213, 61);}
      
    if (randF == 3){
      colourT(autumnFArray[kF][0], autumnFArray[kF][1], 89, 43, 21);}
      
    if (randF > 3){
      colourT(autumnFArray[kF][0], autumnFArray[kF][1], 250, 250, 250);}
    
  } //end for loop leaf 'falling'
    } //end (if season autumn)
  
  
  for (var i = 0; i<leafArray.length; i++){
    //Add colour to the leaves on the tree for summer and spring
    
    if (month == 12 || month == 1 || month == 2){
      //Summer occurs when month is 12, 1 or 2
      
      let randN = int(random(0, 6));
      if (randN == 0){
        colourT(leafArray[i][0], leafArray[i][1], 55, 84,         55);
      }
      if (randN == 1){
        colourT(leafArray[i][0], leafArray[i][1], 84, 119,         84);
      }
      if (randN == 2 && month == 12){
        colourT(leafArray[i][0], leafArray[i][1], 80, 140,         80);}
      if (randN == 2 && month ==1){
        colourT(leafArray[i][0], leafArray[i][1], 130, 206,   130);}
      if (randN == 2 && month ==2){
        colourT(leafArray[i][0], leafArray[i][1], 218, 255,   96);}
        
    
      if (randN == 3 || randN ==4){
        colourT(leafArray[i][0], leafArray[i][1], 112,             178, 112);
      }
      if (randN == 5 && month == 12){
        colourT(leafArray[i][0], leafArray[i][1], 237, 37,         73);}
      if (randN == 5 && month == 1){
        colourT(leafArray[i][0], leafArray[i][1], 209, 77,         101);}
      if (randN == 5 && month == 2){
        colourT(leafArray[i][0], leafArray[i][1], 234, 107,         130);}
      
    } //end 'if summer' conditional
    
    if (month == 3||month == 4|| month == 5){
      //Autumn occurs when month is 3, 4 or 5
      
      if (month == 3){aC = 9}
      if (month == 4){aC = 14}
      if (month == 5){aC = 19}

      let randA = int(random(0, aC));
      if (randA == 0){
        colourT(leafArray[i][0], leafArray[i][1], 153, 76, 32);}
      if (randA == 1){
        colourT(leafArray[i][0], leafArray[i][1], 188, 84, 55);}
      if (randA == 2){
        colourT(leafArray[i][0], leafArray[i][1], 239, 170, 46);}
      if (randA == 3){
        colourT(leafArray[i][0], leafArray[i][1], 216, 138, 85);}
      if (randA == 4){
        colourT(leafArray[i][0], leafArray[i][1], 204, 211, 79);} 
      if (randA == 5){
        colourT(leafArray[i][0], leafArray[i][1], 249, 213, 61);}
      if (randA == 6){
        colourT(leafArray[i][0], leafArray[i][1], 89, 43, 21);}  
      if (randA >6){
        colourT(leafArray[i][0], leafArray[i][1], 250, 250, 250);}
    }  //end 'if autumn' conditional
    
    if (month == 9 || month == 10 || month == 11){
      //Spring occurs when month is 9, 10 or 11
      
      if (month == 9){sC = 9}
      if (month == 10){sC = 7}
      if (month == 11){sC = 6}

      let randSp = int(random(0, sC));
      
      if (randSp == 0){
        colourT(leafArray[i][0], leafArray[i][1], 55, 84,         55);}
      if (randSp == 1){
        colourT(leafArray[i][0], leafArray[i][1], 84, 119,         84);}
      if (randSp == 2){
        colourT(leafArray[i][0], leafArray[i][1], 80, 140,         80);}
      if (randSp == 3){
        colourT(leafArray[i][0], leafArray[i][1], 112,             178, 112);}
      if (randSp == 4){
        colourT(leafArray[i][0], leafArray[i][1], 249,             170, 190);}
      if (randSp == 5){
        colourT(leafArray[i][0], leafArray[i][1], 239,             150, 32);} 
      if (randSp > 5){
        colourT(leafArray[i][0], leafArray[i][1], 250,             250, 250);} 
      
      }//end 'if spring' conditional
    
    //-----------------------
    
      if(month == 6||month == 7 || month == 8){
        //Winter occurs when month is 6, 7 or 8
        if (month == 6){wC = 11}
        if (month == 7){wC = 16}
        if (month == 8){wC = 20}
        
        let randW = int(random(0, wC));
        if (randW == 0){
          colourT(leafArray[i][0], leafArray[i][1], 56, 22, 12);}
        if (randW == 1){
          colourT(leafArray[i][0], leafArray[i][1], 76, 40, 24);}
        if (randW == 2){
          colourT(leafArray[i][0], leafArray[i][1], 86, 40, 9);}
        if (randW == 3){
          colourT(leafArray[i][0], leafArray[i][1], 104, 53, 42);}
        if (randW > 3){
           colourT(leafArray[i][0], leafArray[i][1], 255, 255, 255);}
      } //end 'if Winter' conditional

  } //end for loop for Leaf Array
  
  //save("mySVG1.svg"); 
  //print("Image Saved");
  //Save Image as an SVG
  noLoop();
  
}//end function draw

function colourT(x, y, R, G, B){
//odd numbers for x indicate triangle point down
//even numbers for x indicate triangle point up
  let gridW = 400/c;
  let gridH = 400/r;
  fill(R, G, B);
  stroke(R, G, B);
  
  //Determine triangle type
  x1 = gridW*x/2;
  y1 = gridH*y;
  if(x%2==1){ //triangle point down
    if(y%2==0){
    triangle(x1-(gridW/2), y1, x1, y1+gridH, x1+gridW/2, y1);}
    if(y%2==1){
    triangle(x1, y1, x1+(gridW/2), y1+gridH, x1+gridW, y1);}
    }
  
  if(x%2==0){ //triangle point up
    if(y%2==0){
    triangle(x1-gridW/2, y1+gridH, x1, y1, x1+gridW/2, y1+gridH);}
    if(y%2==1){
    triangle(x1, y1+gridH, x1+gridW/2, y1, x1+gridW, y1+gridH);
    }
  }//colour triangle
}//end function colourT
