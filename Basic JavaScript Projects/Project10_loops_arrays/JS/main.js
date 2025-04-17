var students = ["Shabs", "Phil", "Baba", "Ben", "Taps"];

// Loops through students array to display names
function for_loop() {
    let output = "";
    for (let num = 0; num < 3; num++) {
        output += students[num] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = output;
}

// Displays instrument details using a while loop
function constant_function() {
    // Define constant object with instrument properties
    const Musical_Instrument = {
        type: "guitar",
        brand: "Fender",
        color: "black"
    };
    Musical_Instrument.color = "blue"; // Update color property
    Musical_Instrument.price = "$900"; // Add price property

    // Use while loop to build output string from properties
    const properties = [Musical_Instrument.type, Musical_Instrument.price];
    let output = "The cost of the ";
    let index = 0;
    while (index < properties.length) {
        output += properties[index];
        if (index === 0) output += " was ";
        index++;
    }

    // Display and return the output
    document.getElementById("Constant").innerHTML = output;
    return output;
}