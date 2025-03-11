document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");  // Get display input element
  const buttons = document.querySelectorAll("button");  // Select all buttons

  // Loop through all buttons and add click event listeners
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value") || button.id;  // Get value of the clicked button
      handleInput(value);  // Handle input based on the button clicked
    });
  });

  // Listen for keyboard input
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || "+-*/.%".includes(key)) {  // Check if key is a valid operator or number
      handleInput(key);  // Call handleInput with the key pressed
    } else if (key === "Enter") {
      handleInput("=");  // Evaluate the expression on pressing Enter
    } else if (key === "Delete") {
      window.location.reload();  // Refresh page on Delete (AC button)
    } else if (key === "^") {
      handleInput("^2");  // Handle the power of 2 input
    }
  });

  // Function to process inputs and calculate results
  function handleInput(value) {
    if (value === "AC" || value === "ac") {
      window.location.reload();  // Refresh page on AC or delete key
    } else if (value === "=" || value === "equals") {
      try {
        display.value = eval(display.value);  // Calculate the expression using eval
      } catch {
        display.value = "Error";  // If error, display Error
      }
    } else if (value === "^2") {
      display.value = Math.pow(eval(display.value), 2);  // Square the current value
    } else if (value === "%") {
      display.value = eval(display.value) / 100;  // Convert value to percentage
    } else {
      display.value += value;  // Append the clicked value to display
    }
  }
});