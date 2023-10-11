function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

var textParts = ["Computer Engineer", "Freeleancer","Web Developer", "Networker","Cybersecurity", "Sever Manager"];
var typingSpeed = 120; // Adjust the typing speed (in milliseconds)
var typingElement = document.getElementById("typing-text");
var partIndex = 0;
var letterIndex = 0;

function typeNextPart() {
  if (partIndex < textParts.length) {
    var currentPart = textParts[partIndex];
    var intervalId = setInterval(function() {
      if (letterIndex < currentPart.length) {
        typingElement.innerHTML += currentPart.charAt(letterIndex);
        letterIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(function() {
          // Delay before clearing and moving to the next part
          typingElement.innerHTML = "";
          partIndex++;
          letterIndex = 0;
          typeNextPart(); // Move to the next part
        }, 1500); // Delay before next part (1 second in this example)
      }
    }, typingSpeed);
  } else {
    // All parts have been typed, you can restart if needed
    partIndex = 0;
    typeNextPart();
  }
}

// Start the typing animation
typeNextPart();