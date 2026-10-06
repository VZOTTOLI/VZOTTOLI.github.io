// =========================================
// GAME DAY CHECKLIST
// Main JavaScript
// =========================================


// ---------- Default Checklist Items ----------

const checklistItems = [
    "Pack the cooler",
    "Bring folding chairs",
    "Pack the football",
    "Bring the game-day food",
    "Pack drinks and water"
];


// ---------- Get HTML Elements ----------

const checklistForm = document.getElementById("checklist-form");
const itemInput = document.getElementById("item-input");
const checklistList = document.getElementById("checklist-items");


// ---------- Display Checklist ----------

function displayChecklist() {

    // Clear the current list before rebuilding it
    checklistList.innerHTML = "";

    // Loop through every item in the array
    checklistItems.forEach(function(item) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Add the item text
        listItem.textContent = item;

        // Add the list item to the unordered list
        checklistList.appendChild(listItem);
    });
}


// ---------- Add New Item ----------

function addItem(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the value from the input
    const newItem = itemInput.value.trim();

    // Don't add an empty item
    if (newItem === "") {
        return;
    }

    // Add the new item to the array
    checklistItems.push(newItem);

    // Update the list on the page
    displayChecklist();

    // Clear the input box
    itemInput.value = "";

    // Put the cursor back in the input
    itemInput.focus();
}


// ---------- Form Submission ----------

checklistForm.addEventListener("submit", addItem);


// ---------- Initial Page Load ----------

// Populate the checklist with the default items
displayChecklist();