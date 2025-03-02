var firstname = "Phillip"
document.write(typeof firstname);
document.write(firstname + 93);
console.log(10+9);
console.log(9>10);

// Declare a variable with a Boolean data type set to false
var isActive = false;
// Print the data type of the variable isActive to the browser
document.write(typeof isActive);
document.write("<br>");
// Combine a string "20" with the number 15 and print the result (concatenates as "2015")
document.write("20" + 15);
document.write("<br>");
// Use the == operator to compare if 8 equals 8, printing the result (true)
document.write(8 == 8);
document.write("<br>");
// Declare variables a and b, both set to 3, and use the == operator to compare them, printing the result (true)
var a = 3;
var b = 3;
document.write(a == b);
document.write("<br>");
// Use the > and && operators to check if 15 is greater than 7 AND 9 is greater than 4, printing the result (true)
document.write(15 > 7 && 9 > 4);
document.write("<br>");
// Use the < and || operators to check if 15 is less than 7 OR 9 is less than 4, printing the result (false)
document.write(15 < 7 || 9 < 4);
document.write("<br>");
// Define a function that updates the HTML element with id "Toggle" to show the result of the ! operator
// The expression !(3 > 4) evaluates to true (because 3 is not greater than 4, so negation makes it true)
function toggle_Function() {
  document.getElementById("Toggle").innerHTML = !(3 > 4);
}