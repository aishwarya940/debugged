var nametext, nameInput, ageText, ageInput, genderText, genderInput, heightText, heightInput, weightText, weightInput, submit;
var age, gender, height, weight, upo;

function setup() {

  createCanvas(displayWidth-30, displayHeight-600);

  nameText = createElement('h3', 'Name:');
  nameText.position(displayWidth/2-650, displayHeight/2-250);
  nameInput = createInput("Name");
  nameInput.position(displayWidth/2-650, displayHeight/2-210);
 


  ageText= createElement('h3', 'Age:');
  ageText.position(displayWidth/2-650, displayHeight/2-200);
  ageInput = createInput("Age");
  ageInput.position(displayWidth/2-650, displayHeight/2-160)

  genderText = createElement('h3', 'Gender:');
  genderText.position(displayWidth/2-650, displayHeight/2-150)
  genderInput = createInput("Gender");
  genderInput.position(displayWidth/2-650, displayHeight/2-110);

  heightText = createElement('h3', 'Height (in m):');
  heightText.position(displayWidth/2-650, displayHeight/2-100)
  heightInput = createInput("Height");
  heightInput.position(displayWidth/2-650, displayHeight/2-60);

  weightText = createElement('h3', 'Weight (in kg):');
  weightText.position(displayWidth/2-650, displayHeight/2-50)
  weightInput = createInput("Weight");
  weightInput.position(displayWidth/2-650, displayHeight/2-10);

  greeting = createElement('h2');
  greeting.position(600, 150);

  greeting1 = createElement('h2');
  greeting1.position(600, 200);

  greeting2 = createElement('h2');
  greeting2.position(600, 250);

  greeting3 = createElement('h2');
  greeting3.position(600, 300);

  
  greeting4 = createElement('h2');
  greeting4.position(600, 350);

  greeting5 = createElement('h2');
  greeting5 .position(600, 400);

  greeting5 = createElement('h2');
  greeting5.position(600, 450);

  


  submit = createButton('Submit');
  submit.position(displayWidth/2-650, displayHeight/2+20);
  submit.mousePressed(personalize);
  
}
function draw(){
 
 // input.value('');
 
  submit.mousePressed(personalize);

}

function personalize() {
  console.log("start per")

  textSize(25);
  pername = nameInput.value();
  greeting.html('hello ' + pername + '!');
  nameInput.value('');
  console.log(pername)

  perage= ageInput.value();
   ageInput.value('');

   pergender= genderInput.value();
   genderInput.value('');
 console.log(pergender)

 // text("Hi, " + pername + "!", displayWidth/2,displayHeight/2);

  if(perage< 100 && perage > 0) {
    age = ageInput.value();
    greeting1.html('You are' + age + 'years old.');
  } else if(perage > 100 || perage < 0) {
    greeting2.html('This software can only be used for living people.'); 
  } else {
    greeting3.html(' Your age is invalid. Kindly enter a number.');
    }
  console.log("start per1")
 
  if(pergender === "Male") {
     pergender= genderInput.value();
    pergender = Male;
    greeting4.html('You are Male.');
  } else if(pergender === "Female") {
    pergender = Female;
    greeting5.html('You are Female.');
  } else {
    greeting6.html('Your gender is invalid. Kindly enter either Male or Female.');
  }
/*
  if(heightInput.value() < 0.5) {
    text("This software is probably not best for babies or dwarves.", 600, 500);
  } else if(heightInput.value() > 3) {
    text("This software is probably not best for giants.", 600, 500);
  } else if(heightInput.value() > 0.5 && heightInput.value() < 3) {
    height = heightInput.value();
    text("You are " + heightInput.value() + " m tall.", 600, 500);
  } else {
    text("Your height is invalid. Kindly enter a number (your height in meters).", 600, 500);
  }
  /*
  console.log("start per2")
  if(weightInput.value() < 2) {
    text("This software is probably not best for babies or dwarves.", 600, 600);
  } else if(weightInput.value() > 700) {
    text("This software is probably not best for giants.", 600, 600);
  } else if(weightInput.value() > 2 && weightInput.value() < 700) {
    weight = weightInput.value();
    text("You weigh " + weightInput.value() + " kg.", 600, 600);
  } else {
    text("Your weight is invalid. Kindly enter a number (your weight in kilograms).", 600, 600);
  }

  if(age < 1) {
    text("There is no set time for you to sleep. You may sleep for as long as you wish.", 600, 700);
  } else if(age >= 1 && age < 5) {
    text("You need 12 hours of sleep everyday.", 600, 700);
  } else if(age >= 5 && age < 10) {
    text("You need 11 hours of sleep everyday.", 600, 700);    
  } else if(age >= 10 && age < 18) {
    text("You need 10 hours of sleep everyday.", 600, 700);
  } else if(age > 18) {
    text("You need 8 hours of sleep everyday.", 600, 700);
  }
  console.log("start per3")
  upo = weight/height;
  
  if(upo < 18) {
    text("You're underweight. Eating a nutrious diet, while going for a walk for 30 minutes everyday should help you!", 600, 800);
  } else if(upo > 25) {
    text("You're overweight. Eating a nutrious diet with a little bit less fat while being active in sports should help you!", 600, 800);
  } else if(upo > 18 && upo < 25) {
    text("You weigh... perfect? You weigh perfect for your age and should continue doing what you do!", 600, 800);
  }
 */
  console.log("start per4")
 
}

