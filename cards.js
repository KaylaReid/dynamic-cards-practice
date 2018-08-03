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
    `<div class="aCard">
        <h2>Makin Cards</h2>
        <p>${makeIt}</p>
        <button class="delete-button">Delete</button>
    </div>`

}
//  deleteCard = () =>{
//     let card = document.querySelector(".aCard");
//     card.innerHTML += ``



//  }