// --- Countdown Functionality ---
let countdownInterval = null; // Variable to store the countdown interval ID

// countdown function: takes a number of seconds and counts down to zero
function countdown(seconds) {
    let timeLeft = seconds; // Store the remaining time

    // Clear any existing countdown to prevent multiple timers running
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Immediately display the starting time
    document.getElementById('timer').textContent = timeLeft;

    // Set an interval to update the timer every second
    countdownInterval = setInterval(() => {
        timeLeft--; // Decrease the time by 1 second

        // Update the timer display
        document.getElementById('timer').textContent = timeLeft;

        // When time reaches zero, stop the countdown and show a message
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').textContent = "Time's Up!";
        }
    }, 1000); // 1000 ms = 1 second
}

// startCountdown function: retrieves user input and starts the countdown
function startCountdown() {
    const input = document.getElementById('countdownInput').value; // Get input value
    const seconds = parseInt(input, 10); // Convert to integer

    // Validate the input to ensure it's a positive number
    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number of seconds greater than 0.");
        return;
    }

    countdown(seconds); // Call countdown with the validated input
}

// --- Slideshow Functionality ---
let currentSlide = 0; // Track the current slide index
const slides = document.querySelectorAll('.slide'); // Get all slide elements
let slideInterval = null; // Variable to store the slideshow interval ID

// Function to show a specific slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
        if (i === index) {
            slide.classList.add('active'); // Add active class to the current slide
        }
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Increment index, loop back to 0 if at end
    showSlide(currentSlide); // Display the new current slide
}

// Start the slideshow automatically when the page loads
function startSlideshow() {
    // Clear any existing interval to avoid overlap
    if (slideInterval) {
        clearInterval(slideInterval);
    }

    // Set an interval to change slides every 3 seconds
    slideInterval = setInterval(nextSlide, 3000); // 3000 ms = 3 seconds
}

// Initialize the slideshow on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Show the first slide immediately
    startSlideshow(); // Start the automatic slideshow
});