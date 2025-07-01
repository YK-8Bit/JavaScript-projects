const answerDisplay = document.getElementById("answerDisplay");
const questionDisplay = document.getElementById("questionDisplay");
const buttons = document.querySelectorAll("button");
const equalButton = document.getElementById("equal");
const backspace = document.getElementById("backspace");

//tracking the expression
let expression = ""; //expression variable refers to  the math sentnence 

buttons.forEach(button => { //LOOPING THROUGH EACH BUTTON ELEMENT AND RUNNING A FUNCTION ON IT
    button.addEventListener("click", () => {
        const value = button.textContent; //value variable is equal to the text content of whichever button was clicked 
            
        if(value === "="){
            //converting the division symbol and multiiplication symbol into mathematical operators
            const newExpression = expression.replace(/x/g, "*").replace(/÷/g, "/"); // g refers to global meaning everything will change not just the first 1
            const answer = eval(newExpression);//calculates the expression
            answerDisplay.value = answer;//displays the asnwer insidee of the answer box
        }
        else if(value === "C"){ //checking to see if the value is "C" or "="
             expression = ""; //make the expression blank
            answerDisplay.value = ""; //make the answer display box empty 
            questionDisplay.value = ""; //make the question display box empty 
        }
        else{
            expression = expression + value;//adding the new number/operator to the curreent expression 
        }

        questionDisplay.value = expression; //displaying the expression inside of the question display
    })

});  

 //backspace button code
backspace.addEventListener("click", () => {
    expression = expression.slice(0, -1);//removes the last character from string and updates the current string
    questionDisplay.value = expression;//updates whats in the question 
    answerDisplay.value = "";  //removes the value inside of the answer box
});

