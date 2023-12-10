/*     PROJECT 10 SUBMISSION    
#################################
#################################
#################################
##################################
*/

// runs a printout of the numbers 100 to 1 in descending order
function Call_Loop() {


    var Digit = "";
    var X = 100;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }

    document.getElementById("Loop").innerHTML = Digit;

}


// fills an array and returns the collection. This one is for first 5 concert songs.

var first_five_songs = ["Runaway Jim", "Prince Caspian", "Tweezer", "Mike's Song","I am Hydrogen"];

var Content = "";

var Y;

function for_Loop() {
    for (Y = 0; Y < first_five_songs.length; Y++) {
        Content += first_five_songs[Y] + "<br>";

    }

    document.getElementById("List_of_Songs").innerHTML = Content;
}


   
/*
Uses a empty array and assigns elements in the routine.  This object Defines a players actions
Player statistics function. This defines the elements of an array as player actions ("contributions")
 and writes the result of the function Array element on the index.html page*/

function array_Function() {
    var Player_pic = [];
    Player_pic[0] = "Scoring";
    Player_pic[1] = "Assisting";
    Player_pic[2] = "Blocking a shot";
    document.getElementById("Array").innerHTML = "The newly acquired player is " + Player_pic[2] + ".";   
}



// Creates a Player Object with name, position and team
let player = {
    Team: " Cavs ",
    position: " Guard ",
    nameofplayer: "Donovan Mitchel",
    description: function () {
        return   this.nameofplayer + " ,who plays " + this.position + " for" + " the " +  this.Team;
    }


};
document.getElementById("Player_Object").innerHTML = player.description();






/* END OF SUBMISSION 
#####################################################
######################################################
#####################################################
*/


   

