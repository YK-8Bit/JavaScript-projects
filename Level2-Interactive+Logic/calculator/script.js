const answerDisplay = document.getElementById("answerDisplay");
const questionDisplay = document.getElementById("questionDisplay");
const buttons = document.querySelectorAll("button");

//tracking the expression
let expression = ""; //expression variable refers to  the math sentnence 

buttons.forEach(button => { //LOOPING THROUGH EACH BUTTON ELEMENT AND RUNNING A FUNCTION ON IT
    button.addEventListener("click", () => {
        const value = button.textContent; //value variable is equal to the text content of whichever button was clicked 

        if(value === "C" || value === "="){ //checking to see if the value is "C" or "="
            expression = ""; //make the expression blank
            answerDisplay.textContent = ""; //make the answer display box empty 
            questionDisplay.textContent = ""; //make the question display box empty 
        }else{
            expression += value;//adding the new number/operator to the curreent expression
        }
        questionDisplay.value = expression; //displaying the expression inside of the question display
    })
});