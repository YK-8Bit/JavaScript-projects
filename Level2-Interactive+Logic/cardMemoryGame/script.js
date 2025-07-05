const cards = Array.from(document.querySelectorAll(".card")); //turns the nodeliist into an actual array
const container = document.querySelector(".container");

console.log(cards)//testing just to see if it works


//fisher yates shuffle
shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){ 
        const random = Math.floor(Math.random() * (i+1));
        [array[i],array[random]] = [array[random], array[i]]; 
    }
}

shuffle(cards) //running shuffle with the array cards

cards.forEach(card => container.appendChild(card))//we need to reappend the cards into the container

for(let i = 0; i < cards.length; i++){ //loops through each element
    cards[i].addEventListener("click", () => { //liistens for a click on the  card
        cards[i].classList.toggle("flipped"); //adds a flipped class to the element that gets clicked 
    });
}

