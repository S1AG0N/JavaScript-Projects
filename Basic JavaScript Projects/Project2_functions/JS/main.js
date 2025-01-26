// Define a global variable to hold the value
let value = 0;

// Function to update the value using the += operator
function updateValue() {
    // Increment the value by 10
    value += 10;

    // Update the content of the paragraph element to display the new value
    document.getElementById("result").textContent = `Current Value: ${value}`;
}
