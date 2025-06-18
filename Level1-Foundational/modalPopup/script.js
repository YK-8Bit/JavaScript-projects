const openBtn = document.getElementById("openModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden") //removes the hidden class to make the overlay appear
    modal.classList.remove("hidden"); //removes the hidden class to make the modal appear
});
closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden") //adds the hidden class to make the overlay dissapear
    modal.classList.add("hidden"); //adds the hidden class to make the modal dissapear
});

document.addEventListener("keydown", (keyClicked) => {
    if(keyClicked.key === "Escape"){ //checks to see if the key that is pressed is escape
        overlay.classList.add("hidden") //adds the hidden class to make the overlay dissapear
        modal.classList.add("hidden") //adds the hidden class to make the modal dissapear
    }
});
