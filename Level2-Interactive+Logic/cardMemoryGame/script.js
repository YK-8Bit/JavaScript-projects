const cards = document.querySelectorAll(".card");

console.log(cards)//testing just to see if it works

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", () => {
        cards[i].classList.toggle("flipped");
    });
}

