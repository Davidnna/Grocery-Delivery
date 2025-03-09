// Home Page

// Clearing out the input fields on clicking the submit button only when it exists
const submitButton = document.querySelector(".submit-button");
if (submitButton) {
  submitButton.onclick = function() { submitForm(); };
}

const submitForm = () => {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
}

// Sign up Page

function sendMessage() {
    // Get the button element
    const button = document.getElementById('submitButton');
    
    // Replace the button with a paragraph
    button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';

    setTimeout(() => {
        document.getElementById("submitMessage").outerHTML = '<button class="signup-submit-button" type="submit" disabled id="submitButton" onclick="sendMessage()">Send message 🎉</button>';
    }, 3000);
    
    // Get the home link element and add focus to it
    document.getElementById('homeLink').focus();
    // document.getElementById('homeLink').click();

    document.getElementById('name').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "london";
    document.getElementById('postcode').value = "";
    document.getElementById('email').value = "";
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = false;
}

// Event listeners for each input field
if (document.getElementById('address')) {
    document.getElementById('name').addEventListener('input', checkInputs);
    document.getElementById('address').addEventListener('input', checkInputs);
    document.getElementById('city').addEventListener('change', checkInputs);
    document.getElementById('postcode').addEventListener('input', checkInputs);
    document.getElementById('email').addEventListener('input', checkInputs);
    document.getElementById('yes').addEventListener('change', checkInputs);
    document.getElementById('no').addEventListener('change', checkInputs);
}

// click events are generally accessible to mouse, keyboard, and touchscreen users. Similarly, focus and blur can effectively replace mouseover and mouseout

// For touchscreen users, events like touchstart can be used

function checkInputs() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const email = document.getElementById('email').value;
    const yesRadio = document.getElementById('yes').checked;
    const noRadio = document.getElementById('no').checked;

    // Checks if all fields are filled (truthy) and at least one radio button is selected
    const allFilled = name && address && city && postcode && email && (yesRadio || noRadio);
    
    if (allFilled) {
        popoverMessage.style.opacity = '0';
    }
    
    document.getElementById('submitButton').disabled = !allFilled;
    return allFilled
}