// Convert to uppercase
function convertLetter(value) {
    // Split the name string into an array
    const nameArr = value.split(" ");
    console.log(value.split(" "));
    // Get first letter for each item
    nameArr.forEach((name, index) => {
        console.log(name.replace(name.charAt(0), name.charAt(0).toUpperCase()));
    })
}

module.exports = convertLetter(value);