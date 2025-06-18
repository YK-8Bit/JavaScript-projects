const currentNum = document.getElementById("currentNum");
const btnIncrease = document.getElementById("btnIncrease");
const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("resetAll");

btnIncrease.addEventListener("click", () => {
   const text = currentNum.textContent; //this stores the whole text "current Number: 0" into text variable
   const numStr = text.split(": ")[1];//splits "current Number: 0" where there is a ":" and a space and we use [1] to grab the number only because it becomes an array
   //current number "0" is a string so we will need to convert it to an integer
   let num = parseInt(numStr); //now the current number is now a integer
   num++; //adds 1 to the current number each time it is clicked
   const backToStr = num.toString(); //comverts the integer back to a string
   currentNum.textContent = "Current Number: " + backToStr; //updating the p element which contains "current Number: 0"
});

btnDecrease.addEventListener("click", () =>{
   const text = currentNum.textContent;
   const numStr = text.split(": ")[1];
   let num = parseInt(numStr);
   num--;
   const backToStr = num.toString();
   currentNum.textContent = "Current Number: " + backToStr;
});

btnReset.addEventListener("click", () => {
   currentNum.textContent = "Current Number: " + 0; //resets the number back to 0 
});


