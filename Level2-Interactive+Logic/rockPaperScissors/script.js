const startButton = document.getElementById("startButton");
const userInterface = document.getElementById("userInterface");
const countDown = document.getElementById("countdown");
const title = document.getElementById("title"); 

//making the start page elements dissapear and starting countdown  
startButton.addEventListener("click", () => {
    startButton.classList.add("clicked");
    userInterface.classList.add("show");
    title.classList.add("move");
})

