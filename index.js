function redirectOnChange() {
  var selectedValue = document.getElementById("Dropdown").value;
  if (selectedValue == "ShopHoodies") {
    // Redirect to Hoodies
    window.location.href = "/html/Hoodies.HTML";
  } else if (selectedValue == "ShopPants") {
    // Redirect to Pants
    window.location.href = "/html/Pants.HTML";
  } else if (selectedValue == "AuthorInfo") {
    // Redirect to Author Info
    window.location.href = "/html/Author Info.HTML";
  } else if (selectedValue == "Home") {
    // Redirect to Home
    window.location.href = "/index.HTML";
  }
}

// Function to toggle search bar
function toggleSearchBar() {
  var searchBar = document.getElementById("searchBar");
  var mainHeader = document.getElementById("mainHeader");

  if (searchBar.style.display === "none") {
    searchBar.style.display = "flex";
    mainHeader.style.display = "none";
  } else {
    searchBar.style.display = "flex"; // Always show the search bar when clicked
    mainHeader.style.display = "none";
  }
}

// Variable to store the number of items in the cart
var cartItemCount = 0;

// Function to update the cart content
function updateCartContent() {
  var cartContent = document.getElementById("cartContent");
  if (cartItemCount > 0) {
    cartContent.innerHTML =
      "You have " + cartItemCount + " items in your cart.";
  } else {
    cartContent.innerHTML =
      "Your cart is empty. <a href='shop.html'>Continue shopping</a>.";
  }
}

// Function to cancel search
function cancelSearch() {
  var searchBar = document.getElementById("searchBar");
  var mainHeader = document.getElementById("mainHeader");

  searchBar.style.display = "none";
  mainHeader.style.display = "flex";
}

// Function to unlock the site
function unlockSite() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("closedMessage").style.display = "none";
  document.getElementById("Dropdown").style.display = "block";
}

// Hardcoded username and password
const hardcodedUsername = "admin";
const hardcodedPassword = "password";

// Function to toggle between open and closed states
function toggleClosedState() {
  var dropdown = document.getElementById("Dropdown");
  var closedMessage = document.getElementById("closedMessage");
  var loginForm = document.getElementById("loginForm");

  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    closedMessage.style.display = "none";
  } else {
    dropdown.style.display = "none";
    closedMessage.style.display = "block";
    loginForm.style.display = "block"; // Show login form
  }
}

function authenticate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === hardcodedUsername && password === hardcodedPassword) {
    // If username and password match, hide login form
    document.getElementById("loginForm").style.display = "none";
    return true; // Allow form submission
  } else {
    alert("Invalid username or password");
    return false; // Prevent form submission
  }
}

// Function to fetch and convert hoodies.JSON into the display for hoodies.HTML
function loadHoodieData() {
  fetch("/JSON/hoodies.JSON")
    .then((response) => response.json())
    .then((data) => {
      const albumContainer = document.getElementById("hoodieAlbum");
      data.forEach((hoodie) => {
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                            role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <img src="${hoodie.image}" alt="${hoodie.name}" style="width: 100%; height: 100%;">
                        </svg>
                        <div class="card-body">
                            <p class="card-Title">${hoodie.name}</p>                        
                            <p class="card-text">${hoodie.description}</p>
                            <p class="card-Price" style="font-style: italic">${hoodie.price}</p>
                            <div class="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                `;
        albumContainer.appendChild(col);
      });
    })
    .catch((error) => console.error("Error loading hoodie data:", error));
}
document.addEventListener("DOMContentLoaded", loadHoodieData);

// Function to fetch and convert pants.JSON into the display for pants.HTML
function loadPantsData() {
  fetch("/JSON/pants.JSON")
    .then((response) => response.json())
    .then((data) => {
      const albumContainer = document.getElementById("pantsAlbum");
      data.forEach((pant) => {
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                            role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false">
                            
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <img src="${pant.image}" alt="${pant.name}" style="width: 100%; height: 100%;">
                        </svg>
                        <div class="card-body">
                            <p class="card-Title">${pant.name}</p>
                            <p class="card-text">${pant.description}</p>
                            <p class="card-Price">${pant.price}</p>
                            <div class="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                `;
        albumContainer.appendChild(col);
      });
    })
    .catch((error) => console.error("Error loading pants data:", error));
}
document.addEventListener("DOMContentLoaded", loadPantsData);
