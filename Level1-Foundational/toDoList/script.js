const input = document.getElementById("taskInput");//storing the textbox inside of input vairable 
const addButton = document.getElementById("btnAdd");//storing the add button inside of input variable
const taskList = document.getElementById("taskList"); //storing the ul inside of taskList vairable 

addButton.addEventListener("click", () => {
    const taskText = input.value.trim();// this removed extra space (spaces before and after text)

    if(taskText === ""){ //checks to see if the user has enttered anything
     alert("you must enter something")
     return;
    }else{
        alert("task has been succesfuly added!");
    } 
    
   const taskItem = document.createElement("li"); //created a new li element and stored it within task item
   const btnRemove = document.createElement("button");//creates a button
   btnRemove.textContent = "Remove";//gives the button the text of remove 
   btnRemove.classList.add("remove-btn");//gives the remove button a name so we can style it using css
   btnRemove.addEventListener("click", () =>{
    taskItem.remove()//removes the item from li
   });
   taskItem.textContent = taskText; //we then set the li element to have the text  within the textbox 
   taskItem.appendChild(btnRemove); //putting the button inside of the li making it appear

   taskItem.addEventListener("click", () =>{ //listens for the li element is clicked
    taskItem.classList.add("complete-green"); //adds a class with the name of completed-green to the li eleemnt 
    taskItem.classList.toggle("completed-green") //this allows for the colour to change betwween black and green
   });

   taskList.appendChild(taskItem); //we have now put li element and its value inside of the Ul element 
   input.value="";//resets the value inside the textbox
});

const search = document.getElementById("searchBar");//getting the searchbar from html
search.addEventListener("input", () =>{ //listens for when something is typped into the ssearch bar 
    const filter = search.value.toLowerCase(); //the value inside of the search bar willbe turned into lowercaase
    const tasks = taskList.getElementsByTagName("li"); //grabbing the li element within ul element 
    for(let task of tasks){ //looping through the li element since it will contain a lot of items
        const taskText = task.firstChild.textContent.toLowerCase(); //since theres 2 things inside of the li (button and text) we want the text only and this gets it
        if(taskText.includes(filter)){ //checking to see if the li element text contains whatever has been typed into the search bar
            task.style.display = ""; //makes it show 
        }else{
            task.style.display = "none" //hides it
        }
    }

});

const remove = document.getElementById("btnClear");
remove.addEventListener("click", () => { //listening for when it the clear all button gets clicked
    taskList.innerHTML = ""; //removees the inner html for the ul eleemnt
    alert("all tasks have been removed")
});
