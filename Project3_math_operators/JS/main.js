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

function myFunction(p1, p2) {
  return p1 + p2;
}

//invoke addition function and post content on the index.html under the id titled math
let result = myFunction(4, 3);
document.getElementById("math").innerHTML = "4 + 3 equals " + result;



// This is a multiplication function, followed by a call to multiply two numbers
function myFunctionmult(p1, p2) {
 return p1 * p2;
}
//invoke multiplication function and post content on the index.html under the id titled math2
let result2 = myFunctionmult(4, 3);
document.getElementById("math2").innerHTML = "4 times 3 equals " + result2;



// This is a subtraction function, followed by a call to subtract two numbers
function myFunctionsubtract(p1, p2) {
  return p1 - p2;
}
//invoke subtraction function and post content on the index.html under the id titled mathsubtract
let result3 = myFunctionsubtract(4, 3);
document.getElementById("mathsubtract").innerHTML = "4 - 3 equals " +result3;






// This is a division function, followed by a call to divide numbers
function myFunctiondivide(p1, p2) {
  return p1 / p2;
}
//invoke multiplication function and post content on the index.html under the id titled mathdivide
//divided, sky the winds blows high, divided sky........Phish
let result4 = myFunctiondivide(10, 5);
document.getElementById("mathdivide").innerHTML = "10 Divided by 5 equals " + result4;



// This is a multi-operation function, followed by a call to return the result
function more_Math() {
  return (1 + 2) * 10 / 2 - 5
}
 //invoke multi operations on simple match function and post content on the index.html under the id titled math7
 let simple_Math = more_Math();
  document.getElementById("Math7").innerHTML = "(1 + 2) times 10 divided 2 - 5 equals " + simple_Math; 


//Modulus - returns the remainder of a division problem.
function modulus_Operator() {
  return 25 % 6;
}
//invoke modulus function and post content on the index.html under the id titled math7
  var mod = 25 % 6;
  document.getElementById("Math8").innerHTML = "When you divide 25 by 6 you receive a remainder of: " + mod;



//Modulus - Accepts a base and exponent to mulitply and calculate the value.

function negation_operation(unaryvalue) {
  return -unaryvalue;
}

//invoke negation  function and post content on the index.html under the id titled math9
var unaryvalue = 10;
document.getElementById("Math9").innerHTML = "The negation of: " + unaryvalue +  " is " +  -unaryvalue;




//Increment Operator will increment by one unit

function incremeter(nmbritem) {
   
  return ++nmbritem;
  
}

//invoke increment function and post content on the index.html under the id titled math10

var x = 5.25;
y= incremeter(x);
document.getElementById("Math10").innerHTML = "A one notch increment of " + x + " is  " + y;


//decrement Operator will decrease by one unit
function decremeter(nmbritem){
 
  return --nmbritem;
  
}

//invoke decrement function and post content on the index.html under the id titled math11

var z = 5.25;
w = decremeter(z);
document.getElementById("Math11").innerHTML = "A one notch decrement is  of " + z + " is "  + w;



// Generates a random number

function Randompick(value) {
   
  return Math.random() * value;
  
}

//invoke random number function and post content on the index.html under the id titled math12

var x = 5;
y = Randompick(x);
document.getElementById("Math12").innerHTML = "A random number between  1 and " + x + " is " + y;




//'I have been waiting for you, Mr. Powers'...Dr. Evil
//Takes a base and exposent and multiplies out the value


function powers(x,y) {
   
  return Math.pow(x,y);
  
}


//Invokes the powers function and places value on the index.html page under the Match 13 id

var num1 = 5;
var num2 = 3
y = powers(num1,num2);
document.getElementById("Math13").innerHTML = "<BR>" +  num1 + "  to the  " + num2 + " power is "  + y;
