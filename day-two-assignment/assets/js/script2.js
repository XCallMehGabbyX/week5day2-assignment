/* Write a javascript function that checks for empty input from prompt
 and returns a corresponding error message. */

// Answer
function InputChecker() {
    let thisInput = prompt("Type something but do not leave empty");
    let check = true;
    while (check) {
        if (thisInput == "") {
            alert("Error: Pls add input to this prompt");
            break;
        } else {
            alert("Thanks for the input");
            break;
        }
    }
}
InputChecker()