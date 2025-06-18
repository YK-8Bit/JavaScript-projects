document.querySelector(".red").addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

document.querySelector(".green").addEventListener("click", () =>{
    document.body.style.backgroundColor = "green";
});

document.querySelector(".blue").addEventListener("click", () =>{
    document.body.style.backgroundColor = "blue";
});

document.querySelector(".yellow").addEventListener("click", () =>{
    document.body.style.backgroundColor = "yellow";
});

const colours = ["red", "green", "blue", "yellow", "purple", "voilet", "pink"];
document.querySelector(".random").addEventListener("click", () =>{
const randomIndex = Math.floor(Math.random() * colours.length);
const  randomColour = colours[randomIndex];
document.body.style.backgroundColor = randomColour;
});
    