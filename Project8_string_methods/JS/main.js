/*


**Write functions to utilize each of the following methods: concat(), slice(), toString(), toPrecision()

**Write any HTML elements needed to call and display those functions

Submission for Project 8



*/

// Concat Sentence.  Allows for easy concatenation of text by using the build in concat method in JS
//rather than manaully linking each piece-by-piece "..... "  + "......"
function concat_sentence() {

    var top1 = "All there is today ";
    var top2 = " is a gift ";
    var top3 = " ,so you should not waste it!";

    var combiner = top1.concat(top2, top3);
    document.getElementById("concatfld").innerHTML = combiner;
}


//Cuts out text from a phrase, sentence or word.

function mySubstring() {
    var Phrase = "Won't you put him in the Freezer, Uncle Ebeneezer";
    var substr = Phrase.slice(34, 49);
    document.getElementById("Substring_Result").innerHTML = substr;

}


//Converts a number to a string uxing .toString()

function number_to_string() {

    var num = 190;

    document.getElementById("numtostr").innerHTML = num.toString();


}

//Allows for a number to be set to a fixed decimal point
function set_float() {
    var y = 1 / 3;

    document.getElementById("floater").innerHTML = y.toPrecision(5) + " is one-third represented as a decimal cut-off after five decimal points.";

}



//*** END OF  JAVASCRIPT CODE FOR SUBMISSION
