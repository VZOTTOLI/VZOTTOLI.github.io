//Instead of creatong a bunch of individual variables
//We can put multiple pueces of data in one place using arrays
// Arrays are created using []
const contents = [
    "Health Potion",
    "Sword",
    "Shield",
    "Magic Book",
    "Pet Lizard"
];

function loadInventory() {
    const listElement = document.getElementById("item-list");

    listElement.innerHTML = "";

    for(let i = 0; i < contents.length; i++)
    {
        let currentItem = contents[i];

        let htmlToInject = "<li>" + currentItem + "</li>";

        //listElement = listElement + htmlToInject;
        listElement += htmlToInject;
    }

    document.querySelector("button").disbaled = true;
    document.querySelector("button").innerText = "Backpack Full";

}