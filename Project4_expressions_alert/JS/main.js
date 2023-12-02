//This function will create a dictionary for a Vehicle
function my_Dictionary() {
    var Vehicle = {
        Model: "Truck",
        Color: "Black",
        Size: "Medium",
        Year: 2019,
        Rating:"Good"
    }

//When the user clicks on the web page display the year, which is 5
// The text on the page that the function is invovked is click me! for the Year value from the kpv
    document.getElementById("Dictionary").innerHTML = Vehicle.Year;
}

//This function will create a dictionary for a Vehicle but delete the key for year. When the user clicks on the page, he should receive an undefined message. 
function my_Dictionary_remove() {
    var Vehicle = {
        Model: "Truck",
        Color: "Black",
        Size: "Medium",
        Year: 2019,
        Rating:"Good"
    }
    delete Vehicle.Year;

    //When the user clicks on the web page display undefined due to the delete statement for year.
    //the Text on the web page connected with the invoke of this function is click me! to execute a delete on the Year from the kpv

    document.getElementById("Dictionary_remove").innerHTML = Vehicle.Year;
}


