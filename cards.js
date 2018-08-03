console.log("dope");

const createButton = document.querySelector(".create-button");
const cardPrintsHere = document.querySelector(".card-prints-here");
const body = document.querySelector("body");


body.addEventListener("click", function(event){
    if(event.target.className === "create-button"){
        createElement()
    } else if(event.target.className === "delete-button"){
        event.target.parentElement.remove();

    }
});

// function deleteCard (event){
//     if(event.target.className === "delete-button"){
//         e.target.parentElement.remove();

//     }

// }

// createButton.addEventListener("click", createElement);

function createElement(){
    let makeIt = document.querySelector(".makeIt").value;
    console.log("make It", makeIt);
    cardPrintsHere.innerHTML +=
    `<div class="aCard card border-info">
        <h2 class="card-title center">Makin Cards</h2>
        <p class="card-subtitle mb-2 text-muted center">${makeIt}</p>
        <button class="delete-button">Delete</button>
    </div>`

}
//  deleteCard = () =>{
//     let card = document.querySelector(".aCard");
//     card.innerHTML += ``



//  }