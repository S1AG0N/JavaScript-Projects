// Function to determine if a person can ride based on their height
function Ride_Function() {
    var Height, Can_ride; // Declare variables for height input and ride eligibility message
    Height = document.getElementById("Height").value; // Get the value from an HTML element with id "Height" (e.g., an input field)
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; // Ternary operator: if height < 52, too short; otherwise, tall enough
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Update the HTML element with id "Ride" with the result plus " to ride."
}

// Constructor function to create Vehicle objects with properties
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;   // Assign the Make parameter to the Vehicle_Make property
    this.Vehicle_Model = Model; // Assign the Model parameter to the Vehicle_Model property
    this.Vehicle_Year = Year;   // Assign the Year parameter to the Vehicle_Year property
    this.Vehicle_Color = Color; // Assign the Color parameter to the Vehicle_Color property
}

// Create instances of Vehicle objects using the constructor
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");              // Jack's vehicle: Dodge Viper, 2020, Red
var Emily = new Vehicle("Jeep", "Tail Hawk", "2029", "White and Black"); // Emily's vehicle: Jeep Tail Hawk, 2029, White and Black
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");           // Erik's vehicle: Ford Pinto, 1971, Mustard

// Function to display Erik's vehicle details in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = // Update the HTML element with id "Keywords_and_Constructors"
        "Erik drives a " + Erik.Vehicle_Color + "-colored " +        // Concatenate strings to describe Erik's vehicle color
        Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; // Add model and year to the output
    // Result: "Erik drives a Mustard-colored Pinto manufactured in 1971"
}

// Function to demonstrate nested functions and incrementing a number
function count_Function() {
    document.getElementById("Counting").innerHTML = Count(); // Update the HTML element with id "Counting" with the result of Count()
    
    // Nested function to handle the counting logic
    function Count() {
        var Starting_point = 9; // Initialize a local variable Starting_point with the value 9
        
        // Nested function to increment Starting_point by 1
        function Plus_one() {
            Starting_point += 1; // Increase Starting_point by 1 (e.g., from 9 to 10)
        }
        
        Plus_one(); // Call the Plus_one function to perform the increment
        return Starting_point; // Return the updated value (10)
    }
    // The result "10" will be displayed in the HTML element with id "Counting"
}