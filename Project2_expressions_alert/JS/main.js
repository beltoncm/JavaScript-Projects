//function button_clk() {     //function for a button clk  This function is in Bubble Wrap for purposes of the current += operator requirement. It is a function that uses the GetElemenybyID
//    var str = "This is the button text!"  //stores a string that will be used as a return by the function
//    document.getElementById('Button_Text').innerHTML = str;  //call for getElementbyId  Note- an Id of Button_Text must be available on the HTML
//}
function util_plus_minus() {        //a javascript function that uses the GetelementID and string concatenation to return a message to the screen
    var sentence = "I am learning";  //Initialize the beginning of the sentence
    sentence += " a lot from the course.";  //Part 2 of the Sentence.
    sentence += " The content is excelent!!";  //message formation
    document.getElementById("use_concat").innerHTML = sentence;  //return the message I am learning a lot from the course. The content is excellent
                                                                //to the use_concate id section on the index.html file. The function is HTML event driven and requires the user to click the mouse over the click here message.

}