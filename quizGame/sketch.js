var quiz = ["quiz1", "quiz2", "quiz3", "quiz4", "quiz5"];

var quizpic = ["quiz_1.png", "quiz_2.jpg", "quiz_3.png", "quiz_4.png", "quiz_5.png"];

var choice;
var answers;
var pics;
var count = 0;
var reshuffle=1;

function preload() {
  answers = loadStrings("answer.txt");
  pics=answers;

  quiz[0] = loadImage(quizpic[0]);
  quiz[1] = loadImage(quizpic[1]);
  quiz[2] = loadImage(quizpic[2]);
  quiz[3] = loadImage(quizpic[3]);
  quiz[4] = loadImage(quizpic[4]);

}

function setup() {
// Create a canvas 
createCanvas(400, 400);
button1 = createButton('Change question');
button1.position(170,380);
button1.mousePressed(nextfunc);
}

function draw() {
  clear();
  textSize(18);
  text("The answer is ___", 135, 200); 
  loadpic(count);
 
 
  // Get the value of the choice-button 
  var val = choice.value();
  if (val) {
    if (val === pics[count] ) {
       text("Great...You Are Right", 120, 350);
  
      } 
    else 
     {
      text("Try Again", 160, 350);
      }
  }
 
}


function choice_options() {
  
answers=shuffle(answers);


 choice = createRadio();
 
  choice.option(answers[0]);

 
  choice.option(answers[1]);


  choice.option(answers[2]);


  choice.option(answers[3]);


  choice.option(answers[4]);

  choice.position(50, 250);
}

function loadpic(count) {
 if (reshuffle===1)
 {
  choice_options();
  }
  if(count>=5){
    count=0;
  }
  image(quiz[count], 100, 10, 200, 200 );
  reshuffle=0;
  
}

function shuffle(myarr) {
  var currindx = myarr.length, tempval, randIndx;

  
  while (0 !== currindx) {
 
    randIndx = Math.floor(Math.random() * currindx);
    currindx -= 1;

    tempval = myarr[currindx];
    myarr[currindx] = myarr[randIndx];
    myarr[randIndx] = tempval;
  }

  return myarr;
}

function nextfunc(){
      choice.hide();
      answers=shuffle(answers);
      choice_options();
      count++; 
      if(count===5){count=0;}
 }