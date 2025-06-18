const clock = document.getElementById("clock");
const toggleBtn = document.getElementById("themeToggle");
const container = document.querySelector(".container");
const theme = document.querySelector(".theme");
const title = document.querySelector(".title");


toggleBtn.addEventListener("click", () => {
    container.classList.toggle("light"); //changes the container to light mode
    theme.classList.toggle("light"); //changes the theme to light mode
    toggleBtn.classList.toggle("light"); //changes the toggle button to light mode
    title.classList.toggle("light") //changes the title to light mode
    clock.classList.toggle("light");//changes the text in the clock to light mode
});

const updateClock = () => {
    const current = new Date() //this gets the current date and time but we only need the time
    let hour = current.getHours(); //storing the current hour inside of hour variable 
    let min = current.getMinutes(); //storing the current minutes inside of min variable 
    let sec = current.getSeconds(); //storing the current seconds inside of sec variable

    clock.textContent = hour + ":" + min + ":" + sec; //setting the text content and combining them together 

}
 
updateClock() //runs the function so that it displays
setInterval(updateClock, 1000);//runs the function every 1000ms = 1 second