const todayBtn = document.getElementById('todayBtn');
const weeklyBtn = document.getElementById('weeklyBtn');

todayBtn.addEventListener("click", () => {
    todayBtn.classList.add("selected-button"); //adds the underline effect
    weeklyBtn.classList.remove("selected-button"); //removes the underline effect
    cardContainer.style.display = "flex"; //displays the hour cards
});

weeklyBtn.addEventListener("click", () => {
    weeklyBtn.classList.add("selected-button");//adds the underline effect
    todayBtn.classList.remove("selected-button")//removes the underline effect
    cardContainer.style.display = "none"; //removes the hour cards
})

document.addEventListener("DOMContentLoaded", () => {
    todayBtn.classList.add("selected-button"); //makes sure the page loads with the today button starting off with the underline  effect
})

const weatherIcon = document.getElementById("weather-icon");
const currentCelsius = document.getElementById("currentcelsius");
const feelsLike = document.getElementById("feelslike");
const areaName = document.getElementById("areaname");
const date = document.getElementById("date");
const lastUpdate = document.getElementById("lastupdate");
const wind = document.getElementById("wind");
const rain = document.getElementById("rain");
const searchbar = document.getElementById("searchbar");
const form = document.querySelector("nav form");
const condition = document.getElementById("condition");
const scrollLeft = document.getElementById("leftArrow");
const scrollRight = document.getElementById("rightArrow")
const cardContainer = document.getElementById("cardsContainer");


scrollLeft.addEventListener("click", () => {
    cardContainer.scrollBy({left: -200, behavior: "smooth"})//moves the cards back to the left
})

scrollRight.addEventListener("click", () => {
    cardContainer.scrollBy({left: 200, behavior: "smooth"})//moves the cards to the right
})

const apiKey = "a09a1f44ec0e4a5389d163215252007";

form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents form from refreshing 
    getWeather();//runs the async function when the user clicks the enter/submit key
})

getWeather = async () => {
    const searchbarValue = searchbar.value
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?&key=${apiKey}&q=${searchbarValue}&days=1`);//returns a response object
    const data = await response.json(); //converts the response object into real data

    console.log(data);//logs the data into the console

    //updating the elements
    weatherIcon.classList.add("visible")
    currentCelsius.textContent = data.current.temp_c + "°C";
    feelsLike.textContent = "Feels like " + data.current.feelslike_c + "°C";
    areaName.textContent = data.location.name;
    date.textContent = data.location.localtime;
    lastUpdate.textContent = "Updated: " + data.current.last_updated;
    condition.textContent = data.current.condition.text;
    wind.textContent = `Wind: ${data.current.wind_mph}mph`;
    rain.textContent = `Rain: ${data.current.precip_mm}mm`;
    weatherIcon.src = "https:" + data.current.condition.icon;

    //today hourly
    cardContainer.innerHTML = ""; //removes the old cards
    const hourArray = data.forecast.forecastday[0].hour; //array of the hours up to 24
    
    hourArray.forEach(hour => { //loops through each item and runs the code for each item
        const card = document.createElement("div");//each card will have its own div container
        card.className = 'card1' //gave the div container a name of card

        const icon = document.createElement("img");
        icon.src = "https:" + hour.condition.icon;

        const time = document.createElement("p");
        time.textContent = hour.time.split(" ")[1];

        const temp = document.createElement("p");
        temp.textContent = hour.temp_c + "°C";

        card.appendChild(icon);
        card.appendChild(time);
        card.appendChild(temp);

        cardContainer.appendChild(card);
    })


}

