function Addition() {
    var fnum= 5, snum = 8;
    let sum = 0;
    sum += fnum + snum;

    document.getElementById("Math").textContent = `Result: ${sum}`;
} 

function Subtraction(){
    var num1=10, num2=3;
    let result = 0;
    result += num1-num2;

    document.getElementById("Subtraction").textContent = `Result: ${result}`;
}

function Divide(){
    var d1 = 15, d2 = 3;
    let q1=0;
    q1+=d1/d2;

    document.getElementById("Divide").textContent = `Result: ${q1}`;
}

function Multiply(){
    let m1=4, m2 =5, p=0;
    p+=m1*m2;
    document.getElementById("Multiply").textContent = `Result: ${p}`;
}


function calculateSquareRoot() {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let squareRoot = Math.sqrt(randomNumber);
    document.getElementById("MathResult").textContent =
        `Random Number: ${randomNumber}, Square Root: ${squareRoot.toFixed(2)}`;
}


// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate a random prime number between 10 and 50
function generatePrime() {
    let num;
    do {
        num = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    } while (!isPrime(num));  // Keep generating until a prime number is found
    return num;
}

// Main function to process the prime number
function processPrime() {
    // Step 1: Generate a prime number
    let prime = generatePrime();

    // Step 2: Increment the prime number by 1
    let incremented = prime ++;

    // Step 3: Modulus operation (modulo 3)
    let modResult = incremented % 3;

    // Step 4: Decrement the result
    let finalResult = modResult --;

    // Step 5: Display the result in the HTML paragraph
    document.getElementById("PrimeMathResult").textContent =
        `Prime: ${prime}, Incremented: ${incremented}, Modulo 3: ${modResult}, Final Result: ${finalResult}`;
}
