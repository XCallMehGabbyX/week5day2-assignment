/* Homework
Given an array
score = [1, 2, 9, 20, 50, "bag", "Tall"];
Write a javascript function that iterates through the array and invalidates non-numeric elements.
It should change the element to 0. */

// Answer
function scoreValidator(Item1, Item2, Item3, Item4, Item5, Item6, Item7){
    let score = [`${Item1}`, `${Item2}`, `${Item3}`, `${Item4}`, `${Item5}`, `${Item6}`, `${Item7}`,];
    let thisScore = document.getElementById("score-check");
    let a;
    for( a = 0; a < score.length; a++){
        if (isNaN(score[a])) {
            score[a] = "0",
            thisScore.innerHTML += score[a] + "<br>";
            
        } else {
            thisScore.innerHTML += score[a] + "<br>";
        }

    }
}
alert("Invalid input will be changed to 0")
alert(scoreValidator(+prompt("Input first score: "),
       +prompt("Input second score: "),
       +prompt("Input third score: "),
       +prompt("Input fourth score: "),
       +prompt("Input fifth score: "),
       +prompt("Input sixth score: "),
       +prompt("Input seventh score: ")
));


