// document.addEventListener("DOMContentLoaded", () => {
//   // Create popup elements
//   const popup = document.createElement("div");
//   popup.id = "name-popup";
//   popup.innerHTML = `
//         <h2>Enter your name</h2>
//         <input type="text" id="name-input" placeholder="Your name" />
//         <button id="submit-name">Submit</button>
//     `;

//   // Append the popup to the body
//   document.body.appendChild(popup);

// Add blur effect to the background
//   const container = document.querySelector(".container");
//   const boxx = document.querySelector(".boxx");
//   container.classList.add("blur-background");
//   boxx.classList.add("blur-background");
//   const selector = document.querySelector("#selector");
//   selector.classList.add("blur-background");

// Handle the submit button click
//   document.getElementById("submit-name").addEventListener("click", () => {
//     const name = document.getElementById("name-input").value;
//     if (name) {
//       const userName = name; // Store the name in a const variable

//       console.log(`User's name is ${userName}`);
//       //   popup.style.display = "none"; // Hide the popup
//       container.classList.remove("blur-background"); // Remove blur effect from container
//       boxx.classList.remove("blur-background"); // Remove blur effect from boxx
//       selector.classList.remove("blur-background");

// Update the welcome message
//   const welcomeMessage = `Nice to see you, <span style="color: yellow;">${userName}</span>!`;
//   document.querySelector("#study").innerHTML = welcomeMessage;
//   document.querySelector(".study1").innerText = "Let's play the quiz";

// Initialize the topic selection
var selectedValue; // Define the variable outside the function to make it accessible globally
document.getElementById("ee1").addEventListener("change", function () {
  selectedValue = this.value;
  document.getElementById("text1").innerHTML =
    "Selected Topic: " + selectedValue;
  document.getElementById("text2").innerHTML = "Quiz: " + selectedValue;
});

// Start the quiz
startQuiz();
//     } else {
//       alert("Please enter your name");
//     }
//   });
// });
