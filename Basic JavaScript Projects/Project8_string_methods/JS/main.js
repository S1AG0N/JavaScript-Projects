// Define variables for name and greeting
var first_name = "Phillip ";          // First name with trailing space
var last_name = "Ziwada";            // Last name
var opening = "My name is ";         // Intro phrase
var fullname = opening.concat(first_name, last_name); // Combines to "My name is Phillip Ziwada"

// Displays full name in HTML element
function batanidza() {
    document.getElementById("intro").innerHTML = fullname; // Sets "intro" element to fullname
}

// Creates and shows a greeting with part of the name
function ack() {
    var stat = "Argh I see. ";       // Start of greeting
    var end = " feel free to join us!"; // End of greeting
    let gree = stat.concat(first_name.slice(0,4), end); // Joins "Argh I see. Phil feel free to join us!"
    document.getElementById("ack").innerHTML = gree; // Updates "ack" element
}

// Converts number to string and displays it
function string_Method() {
    var X = 182;                     // Number to convert
    document.getElementById("Number_to_String").innerHTML = X.toString(); // Shows "182" in element
}

// Limits number precision and displays it
function precision_Method() {
    var X = 12454.656565256565789924; // Long decimal number
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // Shows "12454.6566" (10 digits)
}