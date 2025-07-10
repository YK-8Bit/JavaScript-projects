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


//matching logic

let flippedCards = [];

cards.forEach(card => {
    card.addEventListener("click", () => {
        //do nothiing if the card is already flipped or if theres 2 cards  in the array
        if(card.classList.contains("flipped")|| flippedCards.length === 2){
            return;
        }

        card.classList.add("flipped");//flip the card if clicked
        flippedCards.push(card);//put the clicked card into the array


        if(flippedCards.length === 2){
            let card1 = flippedCards[0]; //make the first  item in the array card 1
            let card2 = flippedCards[1]; //make the second  item in the array card 2

            if(card1.dataset.animalType === card2.dataset.animalType){
                flippedCards = []; //if the dataset matches then keep everythin the way it is but reset the array
            }else{
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card2.classList.remove("flipped");
                    flippedCards = [];//reset the array
                },1000)
            }  
        }
    })
})


