// Global variable to store the minimum voting age
const MIN_VOTING_AGE = 18;

// Function to validate and process the voting form
function the_func() {
    // Local variables to store user input
    let fullname = document.getElementById("fullname").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;
    let confirmation = document.getElementById("confirmation");

    // Check if all fields are filled
    if (fullname === "" || age === "" || location === "") {
        confirmation.innerHTML = "Please fill out all fields.";
        return;
    }

    // Check if age meets the minimum voting age (using global variable)
    if (age >= MIN_VOTING_AGE) {
        confirmation.innerHTML = "Thank you for your vote!!!";
    } else {
        let years = MIN_VOTING_AGE - age;
        confirmation.innerHTML = `Unfortunately, you are not allowed to vote this time. You need to wait ${years} years.`;
    }
}

// Function to determine the time of day with intentional error for debugging
function Time_function() {
    // Get the current hour
    var Time = new Date().getHours();
    var Reply;

    // Intentional logical error in original conditions (== instead of proper range checks)
    // Debug using console.log to identify the issue
    console.log("Current Time (hours):", Time); // Log the current time for debugging

    // Incorrect conditions (original for debugging)
    // if (Time < 12 == Time > 0) { // This is incorrect: Time < 12 == Time > 0 evaluates to false
    //     Reply = "It is morning time!";
    // } else if (Time >= 12 == Time < 18) { // This is also incorrect
    //     Reply = "It is afternoon.";
    // } else {
    //     Reply = "It is evening time.";
    // }

    // Corrected conditions after debugging
    if (Time >= 0 && Time < 12) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }

    // Log the reply to ensure the correct message is set
    console.log("Time of day message:", Reply);

    // Display the result
    document.getElementById("Time_of_day").innerHTML = Reply;
}