/*
Name: Christopher Belton
Assignment: Concatenate Example and Expression Example
Date: 11-28-23 version 1

*/


//first part of assignment is to create a Sent1 variable
var Sent1 = "This is the Beginning of the string"
//Next, will create a second string variable and stage it later for concatenation
var Sent2 = " and this is the end of the string"
//Now for the first part of the assignment the strings are being concatenated..
document.write(Sent1 + Sent2);
//This approach uses a third variable to do the concatention
var fullmessage = Sent1 + Sent2
//Initialize so the page separates it from the master, master, master one that concatenates variables directly.
document.write("Approach 2 .......initializizing the use of a third string <BR><BR>");
//one more initializing separator
document.write("Approach 2 .......initializizing........<BR><BR>");
document.write(fullmessage);
document.write("<BR><BR>")
//The next section of code is for the expression requirement
//initialize/section content
document.write("Initialzing.......Expression functionality <BR><BR>");
//Set up operands
var half1 = 54
var half2 = 60
//Set up wrapper messages for the document.write method to wrap around the operands and expressions.
var team_message_ldr = "The Knicks scored ";
var team_message_trlr1 = " points in the first half";
var team_message_trlr2 = "  points in the second half";
var team_message_trlr3 = "  in the first half";
var team_message_trlr4 = " is the difference between 2nd and 1st half totals."
var team_message_trlr5 = " for a grand total of "

//These are basic concatenate messages to start off. Expression related writes will be commented, also.
document.write(team_message_ldr + half1 + team_message_trlr1 + "<BR><BR>");
document.write(team_message_ldr + half2 + team_message_trlr2 + "<BR><BR>");
//This includes an expression
document.write(half2 - half1 + team_message_trlr4) + "<BR><BR>";
//This one also includes an expression
document.write(team_message_ldr + half1 + team_message_trlr1 + " and " + team_message_trlr2 + team_message_trlr5 + (half1 + half2) + "<BR><BR>")
//Making a couple of Window Calls
window.alert(team_message_ldr + half1 + team_message_trlr1 + "<BR><BR>");
window.alert(team_message_ldr + half2 + team_message_trlr2 + "<BR><BR>");