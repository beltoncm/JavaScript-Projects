// generic button click function in bubble wrap
function button_clk() {     //function for a button clk  This function is in Bubble Wrap for purposes of the current += operator requirement. It is a function that uses the GetElemenybyID
   var str = "This is the button text!"  //stores a string that will be used as a return by the function
   document.getElementById('Button_Text').innerHTML = str;  //call for getElementbyId  Note- an Id of Button_Text must be available on the HTML
}


//This function uses the += operartors to concatenate text
//to the use_concate id section on the index.html file. The function is HTML event driven and requires the user to click the mouse over the click here message.

function util_plus_minus() {        //a javascript function that uses the GetelementID and string concatenation to return a message to the screen
    var sentence = "I am learning";  //Initialize the beginning of the sentence
    sentence += " a lot from the course.";  //Part 2 of the Sentence.
    sentence += " The content is excelent!!";  //message formation
    document.getElementById("use_concat").innerHTML = sentence;  //return the message I am learning a lot from the course. The content is excellent
  
}



//Developed for Function Challenge - Step 75 
// This is an addition function, followed by a call to add two numbers.

function myFunction() {
  var x = 4;
  var y = 5;
  let z = x + y;
  document.getElementById("math").innerHTML = x +  " + " + y + " equals " + z;
}




// This is a multiplication function, followed by a call to multiply two numbers
function myFunctionmult() {
  var x = 10;
  var y = 5;
  let z = x * y;
  document.getElementById("math2").innerHTML = x + "  times " + y +  " equals " + z;
}
//invoke multiplication function and post content on the index.html under the id titled math2





// This is a subtraction function, followed by a call to subtract two numbers
function myFunctionsubtract() {
 var x = 7;
 var y = 3;
 let   z = x - y;
  document.getElementById("mathsubtract").innerHTML =  x + " minus " +  y + " is " + z;
}


// This is a division function, followed by a call to divide numbers
function myFunctiondivide() {
  var x = 10/5;
  document.getElementById("mathdivide").innerHTML = "10 Divided by 5 equals " + x;

}




// This is a multi-operation function
function   more_Math(){
var v = 1;
  var w = 2;
  var x = 10; 
  var y = 5;
  let z = (v + w) * x / w - y;
  document.getElementById("Math7").innerHTML =  v + " plus " +  w + " times " + x + " divided by " + w + " minus " + y + " is equal to " + z; 
}
 


//Modulus - returns the remainder of a division problem.
function modulus_Operator() {
  var x = 25;
  var y = 6;
  let z = x % y;
  document.getElementById("Math8").innerHTML = "When you divide " + x + " by " +  y + " you receive a remainder of: " + z;


}


//Modulus - Accepts a base and exponent to mulitply and calculate the value.

function negation_operation() {
  var x = 10
  document.getElementById("Math9").innerHTML = "The negation of: " + x +  " is " +  -x;
}


//Increment Operator will increment by one unit

function incremeter() {
  var x = 8;
  let z = ++x;
  document.getElementById("Math10").innerHTML = "A one notch increment of " + --x + " is  " + z;
}


//decrement Operator will decrease by one unit
function decremeter(){
  var x = 8;
  let z = --x;
 
 document.getElementById("Math11").innerHTML = "A one notch decrement   of " + ++x + " is "  + z;

}


// Generates a random number

function Randompick() {
   
  var y = 5;
  let z =  Math.random()*y;
  document.getElementById("Math12").innerHTML = "A random number between  1 and " + y + " is " + z;

}


//Takes a base and exposent and multiplies out the value

function powers() {
  var x = 5;
  var y = 3;
  let z =  Math.pow(x,y);
  document.getElementById("Math13").innerHTML = "<BR>" +  x + "  to the  " + y + " power is "  + z;

}



