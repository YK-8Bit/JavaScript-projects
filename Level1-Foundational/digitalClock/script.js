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
    let period = ""; //empty string that will contain AM or PM

    //logic for AM and PM
    if(hour >= 12){
        period = "PM"; //so if the time is directly on 12 or above then its PM
    }else{
        period = "AM"; //so if the time is less than 12 then its AM
    }

    //conversion to 12 hour
    if(hour === 0){
        hour = 12; //if its midnight on a 24 hour clock the its 12 on 12 hour clock
    }else if(hour > 12){
        hour = hour - 12; //if the hour is greater than 12 then we should subtract 12 from it to get it to 12 hour format
    }

    //comversion to string so we can use pad start

    let hourStr =hour.toString().padStart(2, "0");//if number is less than 2 digits add a 0
    let minStr = min.toString().padStart(2, "0");//if number is less than 2 digits add a 0
    let secStr = sec.toString().padStart(2, "0");//if number is less than 2 digits add a 0

    clock.textContent = hourStr + ":" + minStr + ":" + secStr + " " +  period; //setting the text content and combining them together
}
 
updateClock() //runs the function so that it displays
setInterval(updateClock, 1000);//runs the function every 1000ms = 1 second