// Init variables
const input = document.querySelector("input");
const p = document.querySelector("p");

// Event listener on blur
input.addEventListener("blur", validateInput);


// Validate input
function validateInput() {
    // Check email -- let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})/;
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


// Convert to uppercase
function convertLetter(value) {
    let output = ``;
    // Split the name string into an array
    const nameArr = value.split(" ");
    console.log(value.split(" "));
    
    // Check if p has span elements already
    if(!p.hasChildNodes()) {
        // Convert every first letter of the words to uppercase
        nameArr.forEach((name, index) => {
            console.log(name.replace(name.charAt(0), name.charAt(0).toUpperCase()));
            output +=  `<span>${name.replace(name.charAt(0), name.charAt(0).toUpperCase())}</span>`;
      })
    } else {
        // Delete elements from p
        p.innerHTML = "";
        // Convert every first letter of the words to uppercase
        nameArr.forEach((name, index) => {
            console.log(name.replace(name.charAt(0), name.charAt(0).toUpperCase()));
            output +=  `<span>${name.replace(name.charAt(0), name.charAt(0).toUpperCase())}</span>`;
      })
    }
    
    // Append to UI
    p.innerHTML = output;
    // Clear input field
    input.value = "";
}