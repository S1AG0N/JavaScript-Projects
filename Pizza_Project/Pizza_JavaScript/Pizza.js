function getReceipt() {
    // Initialize a string to build the receipt, starting with a header
    // This string will be passed to other functions to grow line by line
    var text1 = "<h3>You Ordered:</h3>";

    // Initialize variables to track the total cost and size cost
    var runningTotal = 0; // Tracks the overall cost of the order
    var sizeTotal = 0;    // Tracks the cost of the selected pizza size

    // Get all elements with class "size" (radio buttons for pizza sizes)
    var sizeArray = document.getElementsByClassName("size");

    // Loop through the size radio buttons to find the selected one
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            // Store the value of the selected size (e.g., "Large Pizza")
            var selectedSize = sizeArray[i].value;
            // Append the selected size to the receipt string with a line break
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Determine the cost based on the selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;  // Personal Pizza costs $6
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;  // Small Pizza costs $8
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10; // Medium Pizza costs $10
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14; // Large Pizza costs $14
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16; // Extra Large Pizza costs $16
    }

    // Set the running total to the size cost (toppings will be added later)
    runningTotal = sizeTotal;

    // Log the selected size and its cost for debugging
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    // Log the current receipt string for debugging
    console.log("size text1: " + text1);
    // Log the subtotal (currently just the size cost) for debugging
    console.log("subtotal: $" + runningTotal + ".00");

    // Call the getTopping function, passing the current total and receipt string
    // All three of these variables will be passed on to each function
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    // Initialize variables to track topping cost and selected toppings
    var toppingTotal = 0;         // Tracks the cost of additional toppings
    var selectedTopping = [];     // Array to store the selected topping values

    // Get all elements with class "toppings" (checkboxes for meats and vegetables)
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through the topping checkboxes to find the selected ones
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            // Add the value of the selected topping to the array (e.g., "Pepperoni")
            selectedTopping.push(toppingArray[j].value);
            // Log the selected topping for debugging
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            // Append the selected topping to the receipt string with a line break
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    // Count the number of selected toppings
    var toppingCount = selectedTopping.length;

    // Calculate the topping cost: first topping is free, each additional is $1
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // $1 per topping after the first
    } else {
        toppingTotal = 0; // First topping is free
    }

    // Add the topping cost to the running total
    runningTotal = (runningTotal + toppingTotal);

    // Log the total number of selected toppings for debugging
    console.log("total selected topping items: " + toppingCount);
    // Log the topping cost calculation for debugging
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    // Log the updated receipt string for debugging
    console.log("topping text1: " + text1);
    // Log the final total cost for debugging
    console.log("Purchase Total: " + "$" + runningTotal + ".00");

    // Update the "showText" div with the receipt string (size + toppings)
    document.getElementById("showText").innerHTML = text1;
    // Update the "totalPrice" div with the final total cost
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}