const startButton = document.getElementById("startButton");
const userInterface = document.getElementById("userInterface");
const countDown = document.getElementById("countdown");
const title = document.getElementById("title"); 
const optionButtons = document.querySelectorAll(".option")


//making the start page elements dissapear and starting countdown  
startButton.addEventListener("click", () => {
    startButton.classList.add("clicked");
    userInterface.classList.add("show");
    title.classList.add("move");

    let userChoice = ""; 

        optionButtons.forEach((button) => { //loops through each button
            button.addEventListener("click", () => {
                    button.classList.add("selected")//apply a red border to the selected button
                    userChoice = button.getAttribute("data-button"); //updates the userchoice based on the  button that was clicked using its attibute


                    //hides the other  buttons
                    optionButtons.forEach((otherButton) => {
                        if(otherButton != button){ //if  the other buttons are not the clicked buttons then hide it
                            otherButton.style.display = "none";
                        }
                    })

            })
        })

    //countdown logic
    let count = 10;//starting number
    countDown.textContent = count;//set the h1 element to the count

    const interval = setInterval(() => {
        count--;//subtract 1 each time
        countDown.textContent = count;//set the h1 element to the updated count
        


        //logic for when the countdown  reaches 0
        if(count === 0){ 
            clearInterval(interval);//stops it from running
            
            //game logic
            const options = ["rock", "paper", "scissors"]; //these are the options that the computer will be using
            const randomIndex = Math.floor(Math.random() * 3);//creates a random  number between 0 and 2 since theres indexes from 0,1,2
            const computerChoice = options[randomIndex];//this gives the  coomputer a random option from the options array

            if(computerChoice === userChoice){
                console.log("its a draw"); //(placeholder)
            }else if(
                (computerChoice === "rock" && userChoice === "scissors") ||
                (computerChoice === "paper" && userChoice === "rock") ||
                (computerChoice === "scissors" && userChoice === "paper")
            ){
                console.log("computer won"); //(placeholder)
            }else{
                console.log("You win"); //(placeholder)
            }
        }

    },1000)
})



