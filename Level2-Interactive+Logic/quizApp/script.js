const flagImage = document.getElementById("flagImage");
const score = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const questionText = document.getElementById("questionText");
const optionList = document.querySelector("ul");

const questionsData = [ //this is the questiions placed in an obect array
    {
        flag: "images/R.png",
        question: "What country does this flag belong to?",
        options: ["Japan", "Pakistan", "Italy", "France"],
        correct: "Japan"
    },
    {
        flag: "images/R.jpeg",
        question: "What country does this flag belong to?",
        options: ["Russia", "Switzerland", "India", "France"],
        correct: "Russia"
    },
    {
        flag: "images/OIP.jpeg",
        question: "What country does this flag belong to?",
        options: ["Japan", "Germany", "Italy", "France"],
        correct: "Germany"    
    },
    {
        flag: "images/pakistan.jpg",
        question: "What country does this flag belong to?",
        options: ["Japan", "Italy", "Pakistan", "Russia"],
        correct: "Pakistan"
    },
    {
        flag: "images/switz.jpg",
        question: "What country does this flag belong to?",
        options: ["switzerland", "Italy", "Pakistan", "Russia"],
        correct: "switzerland"
    },
     {
        flag: "images/UL.webp",
        question: "What country does this flag belong to?",
        options: ["switzerland", "United Kingdom", "Pakistan", "Russia"],
        correct: "United Kingdom"
    }
]

let questionIndex = 0; //starts of at index 0 which is the first question

nextBtn.addEventListener("click", () => {
    questionIndex++ //increasiing the index by 1 each time the button is clicked
    displayQuestion();
})

displayQuestion = () => {
    const currentQuestion = questionsData[questionIndex]; //gets the current quesiton
    flagImage.src = currentQuestion.flag;//updates the flag
    questionText.innerHTML = currentQuestion.question; //updates the questionText same for all of them("What country does this flag belong to?")
    optionList.innerHTML = ""; //clears the current list

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li"); //creates a li element
        li.textContent = option; //for each li set the text to the option
        optionList.appendChild(li);// putting the li inside of the ul to make it appear
    })
}
displayQuestion()
