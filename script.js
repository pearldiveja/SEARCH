// script.js

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const imageUpload = document.getElementById("imageUpload");
const sorterTab = document.getElementById("sorterTab");
const ecomTab = document.getElementById("ecomTab");
const toggleDarkMode = document.getElementById("toggleDarkMode");
const ecommItems = document.getElementById("ecommItems");
const listedItems = document.getElementById("listedItems");
const rejectedItems = document.getElementById("rejectedItems");
const viewRejectedButton = document.getElementById("viewRejectedButton");

// Dark Mode State
let darkModeEnabled = false;

// Function to toggle dark mode
function toggleDarkModeHandler() {
  darkModeEnabled = !darkModeEnabled;
  if (darkModeEnabled) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
    toggleDarkMode.textContent = "Disable Dark Mode";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    toggleDarkMode.textContent = "Enable Dark Mode";
  }
}

// Function to handle search
function handleSearch(query) {
  console.log(`Searching for: ${query}`);
  // Simulate adding results to the "Recent Activity" feed
  addToFeed(ecommItems, `Image of "${query}"`, "https://via.placeholder.com/150", "ECOMM");
  addToFeed(listedItems, `Image of "${query}"`, "https://via.placeholder.com/150", "Listed Online");
}

// Function to handle image upload
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    console.log(`Uploaded image: ${file.name}`);
    addToFeed(ecommItems, file.name, "https://via.placeholder.com/150", "ECOMM");
  }
}

// Function to add items to the feed
function addToFeed(feedContainer, title, imageUrl, category) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("feed-item");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;

  const caption = document.createElement("p");
  caption.textContent = `${title} (${category})`;

  itemDiv.appendChild(img);
  itemDiv.appendChild(caption);

  feedContainer.appendChild(itemDiv);
}

// Function to toggle rejected items visibility
function toggleRejectedItems() {
  if (rejectedItems.classList.contains("hidden")) {
    rejectedItems.classList.remove("hidden");
    viewRejectedButton.textContent = "Hide Recent Rejected Items";

    // Simulate adding rejected items
    rejectedItems.innerHTML = ""; // Clear existing items
    addToFeed(rejectedItems, "Low-value item", "https://via.placeholder.com/150", "Rejected");
    addToFeed(rejectedItems, "Another low-value item", "https://via.placeholder.com/150", "Rejected");
  } else {
    rejectedItems.classList.add("hidden");
    viewRejectedButton.textContent = "View Recent Rejected Items";
  }
}

// Event Listeners
toggleDarkMode.addEventListener("click", toggleDarkModeHandler);

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) handleSearch(query);
});

imageUpload.addEventListener("change", handleImageUpload);

viewRejectedButton.addEventListener("click", toggleRejectedItems);

sorterTab.addEventListener("click", () => {
  sorterTab.classList.add("active");
  ecomTab.classList.remove("active");
});

ecomTab.addEventListener("click", () => {
  ecomTab.classList.add("active");
  sorterTab.classList.remove("active");
});
