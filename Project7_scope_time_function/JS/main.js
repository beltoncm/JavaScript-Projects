//Project7_SCOPY_TIME_FUNCTION SUBMISSION ASSIGNMENT STEP 152

//Assigning Local variable

function add_local_variable() {
    
    var m = 10;

    
    document.getElementById("lvariable").innerHTML = m + X;
    console.log(M);
}


//Assigning a Global Variable. Referencing in the add_local.. and test_global fxs
X = 1000;
function add_test_global() {
    
    let y = X + 5;

    document.getElementById("gvariable").innerHTML = y;
}

// Basic Generic If Statement using simple math and operators.

function test_if_stmt() {

    if (55*10 > 4)
    {
        document.getElementById("testif").innerHTML = "55 times ten is greater than 4";
    }

}



// This will perform an invalid operation. It is connected to a <p> element and includes
// a console.log() message that can be reviewed in Google Chrome from the Console in Developer Tools
// Clicking will generate the message Infinity on the page and in the Console window.
function test_to_generate_error() {

    let result = 12/ 0;


    console.log(result);
    
    document.getElementById("err_fx").innerHTML = result;

}

//adding time_Function
//This will inform the user of what part of the day. 

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";

    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon"
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}





//adding time_Function for Calendar days
//This will inform the user of what part of the month it is. 

function Time_function2() {
    var Time = new Date().getDate();
    var Reply;
    if (Time < 3 ) {
        Reply = "We are in the first-half of the current month!";

    }
    else if (Time > 4) {
        Reply = "We are in the second-half of the current month"
    }
    else {
        Reply = "It is the 15th calendar day of the current month.";
    }
    document.getElementById("Time_of_day2").innerHTML = Reply;
}






// End of Project7_SCOPE_TIME_Function submission assignment
