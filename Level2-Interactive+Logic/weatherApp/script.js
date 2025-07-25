const todayBtn = document.getElementById('todayBtn');
const weeklyBtn = document.getElementById('weeklyBtn');

todayBtn.addEventListener("click", () => {
    todayBtn.classList.add("selected-button"); //adds the underline effect
    weeklyBtn.classList.remove("selected-button"); //removes the underline effect
});

weeklyBtn.addEventListener("click", () => {
    weeklyBtn.classList.add("selected-button");//adds the underline effect
    todayBtn.classList.remove("selected-button")//removes the underline effect
})

document.addEventListener("DOMContentLoaded", () => {
    todayBtn.classList.add("selected-button"); //makes sure the page loads with the today button starting off with the underline  effect
})