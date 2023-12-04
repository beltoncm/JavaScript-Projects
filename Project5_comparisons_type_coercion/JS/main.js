///SUBMISSION ASSIGNMENT
// STEP 126
/* Minimum project requirements (the code you submit must minimally include the following):


Utilize the document.write() method and typeof operator to display the data type of a variable of your choosing.

Write an expression combining a string and a number.

Write code utilizing the following operators: ==, ===, >, <, &&, ||, ! and display them in the browser.

Add comments throughout your JavaScript explaining your code. */


//List of required JavaScript functions

//Returns the datatype of 3 as number
function button_clk() {
    var j = typeof 3;
    document.getElementById('demo_submit1').innerHTML = j;
}

//Tests the principle of coercion by casting a number as a string by using quotes. The end result should be 105
function coercion_operation() {
    var num1 = "10";
    var num2 = 5;

    let result = num1 + num2;

    document.getElementById('demo_submit2').innerHTML = result;

}

// two equal signs test for equal values.  Tests for the number 5 and returns true

function test_equality_true() {
    
      
       var v = 5 == 5;
       
        document.getElementById("demo_submit3").innerHTML = v;
   }
 

// two equal signs test for equal values.  Tests  the number 3 against a 5 and returns false

function test_equality_false() {
  
       
      var t = 5 == 3;
      
       document.getElementById("demo_submit4").innerHTML = t;
  }
  

//function using the greater than symbol to test if 150 is greater than 25
  
  function test_greater_than() {
    
       
      var num1 = 150;
      
      var num2 = 25;

      let result = num1 > num2;

       document.getElementById("demo_submit5").innerHTML = result;
  }


//function using the less than symbol to test if 23 is less than 300
  function test_less_than() {
    
      var num1 = 23;
      
    var num2 = 300;

    let result = num1 < num2;

          document.getElementById("demo_submit6").innerHTML = result;
  }

  

//Uses AND Logic on two conditions. BOth conditions neeed to be met for this to be true.
//This tests if 10 > 5 and 6 < 8.  Result will return true.  
function function_ampersand() {
    
    var amp_val_1 = 10;
    var amp_val_2 = 5;
    var amp_val_3 = 6;
    var amp_val_4 = 8;
    let amp_result = amp_val_1 > amp_val_2 && amp_val_3 < amp_val_4;

    document.getElementById("demo_submit7").innerHTML = amp_result;

}
   

//Uses AND Logic on two conditions. Both conditions need to be met in order for this to return True.
//This tests if 10 > 5 and 6 > 8.  Result will return false.  


function function_ampersand2() {
    
    var amp_val_1 = 10;
    var amp_val_2 = 5;
    var amp_val_3 = 6;
    var amp_val_4 = 8;
    let amp_result = amp_val_1 > amp_val_2 && amp_val_3 > amp_val_4;

    document.getElementById("demo_submit8").innerHTML = amp_result;

}

  

// Uses OR logic on two conditions. Only one condition needs to be met. Tests if 10>5 OR 6>8
// this returns TRUE since one of the conditions is true

function function_doublepipe() {
    
    var amp_val_1 = 10;
    var amp_val_2 = 5;
    var amp_val_3 = 6;
    var amp_val_4 = 8;
    let doublepipe_result = amp_val_1 > amp_val_2 || amp_val_3 > amp_val_4;

    document.getElementById("demo_submit9").innerHTML = doublepipe_result;

}
   

// Uses OR logic on two conditions. Only one condition needs to be met. Tests if 10>55 OR 6>8. This one will return
//false since neither condition is met.

function function_doublepipe2() {
    
    var amp_val_1 = 10;
    var amp_val_2 = 55;
    var amp_val_3 = 6;
    var amp_val_4 = 8;
    let doublepipe_result = amp_val_1 > amp_val_2 || amp_val_3 > amp_val_4;

    document.getElementById("demo_submit10").innerHTML = doublepipe_result;

}
     
//Simple function test that solely uses one expression and a greater than equal operator.  
//Tests if 10 > 55.  This function returns false
function function_nottrue_true() {
    
    var amp_val_1 = 10;
    var amp_val_2 = 55;
    
    let nottrue_result = amp_val_1 > amp_val_2;

    document.getElementById("demo_submit11").innerHTML = !nottrue_result;

}


//Simple function test that solely uses one expression and a greater than equal operator.  
//Tests if 10 < 55.  This function returns true
function function_nottrue_false() {
    
    var amp_val_1 = 10;
    var amp_val_2 = 55;
    
    let nottrue_result = amp_val_1 < amp_val_2;

    document.getElementById("demo_submit12").innerHTML = !nottrue_result;

}  
  
//Tests for Equality on value and datatype. This uses the triple Equal sign operator.
//Tests if the number 150 = the number 150. This will return true.

function test_equality_triple_equal_true() {
    
        
    var samevaldtypex = 150 === 150;
       
    document.getElementById("demo_submit13").innerHTML = samevaldtypex;
}



//Tests for Equality on value and datatype. This uses the triple Equal sign operator.
//Tests if the number 150 = the string "150". This will return false.

function test_equality_triple_equal_false() {
    
        
    var samevaldtypex = 150 === "150";
       
    document.getElementById("demo_submit14").innerHTML = samevaldtypex;
}



    
 