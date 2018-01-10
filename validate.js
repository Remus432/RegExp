// Init variables
const input = document.querySelector("input");
const p = document.querySelector("p");

// Event listener on blur
input.addEventListener("blur", validateInput);

// Validate input
function validateInput() {
    // Init variables
    const input = document.querySelector("input");
    const p = document.querySelector("p");

    // Event listener on blur
    input.addEventListener("blur", validateInput);
    //let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})/;
    let re = /^[A-Z]([a-zA-Z]+)[ A-Z]([a-zA-Z]+)$/;

    // Check if value matches RegExp
    if(!re.test(input.value)) {
        console.log("Not working");
        // Transform first letters of the name to uppercase
        convertLetter(input.value);

    } else {
        console.log("Working");
        p.innerHTML = input.value;
    }
}


module.exports = validateInput();