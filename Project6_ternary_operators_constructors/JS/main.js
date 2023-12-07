//Assignment submission

//Uses Ternary or conditional  A  ?  B or C
//Over 100K is not eligible for a refund
///https://www.educba.com/javascript-nested-functions/


function tax_rebate_Function() {
    var income, Can_rebate;
    income = document.getElementById("income").value;
   document.getElementById("rebate").innerHTML = assess_income()
   function assess_income() {
    Can_rebate = (income > 100000) ? "You are not eligible for a refund " : "You are eligible for a refund ";
     //  document.getElementById("rebate").innerHTML = Can_rebate + ".";
       return Can_rebate + "."; 
   }  



}




// Constructor function for Employee objects- Uses "this." to create a place holder so the values can be assigned later.
//new Keyword is then used to create an object, the team leader, who is actually the Wolfman's Brother.
//Basic function that creates an Employee object and provides a profile of the employee
function Employee(first, last, Years, Dept) {
    this.firstName = first;
    this.lastName = last;
    this.yearsService = Years;
    this.Department = Dept;
  }
  
  // Create a Person object
  var myteamleader = new Employee("John", "Doe", 10, "Accounting");
  
  function my_Employee(){
document.getElementById("employee_record").innerHTML = "My team leader's name is "+ myteamleader.firstName+ " " + myteamleader.lastName + ". He has worked at the company for " + myteamleader.yearsService + " years " +
" he is working in the " + myteamleader.Department + " department.";

}
//Nested Function
//The inner function references the Math.pow to work out a base and exponent

function powers(a, b) {
   // function square(x) { return x*x; }
    return  Math.pow(10,2);

 }
function secondFunction() {
    var result;
    result = powers(10, 2);
    document.getElementById("math_function").innerHTML = result;
}



//end assignment
