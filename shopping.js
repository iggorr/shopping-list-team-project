// Initialise Array
let items = [];

// Function for adding item to array from user input 
function addItem() {
    const input = document.getElementById("item");
    items.push(input.value);
    // Reset input to nothing
    input.value = "";
    // Display item on page
    displayList();
  }

// Function to remove item from list
function removeItem(index) {
  // Finds the item at the given index and removes from array
    items.splice(index, 1);
    // Displays list again with item removed
    displayList();
}

// Function to display list
function displayList() {
    // Gets list element from HTML
  const list = document.getElementById("list");
  // Clear list element
  list.innerHTML = "";
  // Loop through the array
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Create an HTML element 
    const listItem = document.createElement("li");
    // Give the item an ID based on its position in array
    listItem.id = `item-${i}`;
    // Add the HTML for the item's name and button to remove it
    listItem.innerHTML = `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="${item}">
        <label class="form-check-label" for="${item}">
          ${item}
        </label>
        <button type="button" onclick="removeItem(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    `;
    // Add item to HTML list
    list.appendChild(listItem);
  }
}