// script.js
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const imageUpload = document.getElementById('imageUpload');
const sorterTab = document.getElementById('sorterTab');
const ecomTab = document.getElementById('ecomTab');
const resultsDiv = document.querySelector('.results');

// Function to handle search
function handleSearch(query) {
    // Use Perplexity API to fetch data
    fetch(`https://api.perplexity.ai/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            // Display search results
            displayResults(data);
        })
        .catch(error => console.error('Error:', error));
}

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const imageData = reader.result;
        // Use Perplexity API to search by image
        fetch('https://api.perplexity.ai/search/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: imageData })
        })
            .then(response => response.json())
            .then(data => {
                // Display search results
                displayResults(data);
            })
            .catch(error => console.error('Error:', error));
    };
    reader.readAsDataURL(file);
}

// Function to display search results
function displayResults(data) {
    resultsDiv.innerHTML = '';
    data.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        resultItem.appendChild(itemImage);
        const itemInfo = document.createElement('p');
        itemInfo.textContent = item.name + ' - ' + item.price;
        resultItem.appendChild(itemInfo);
        resultsDiv.appendChild(resultItem);
    });
}

// Event listeners
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        handleSearch(query);
    }
});

imageUpload.addEventListener('change', handleImageUpload);

sorterTab.addEventListener('click', () => {
    sorterTab.classList.add('active');
    ecomTab.classList.remove('active');
    // Update results based on sorter tab
});

ecomTab.addEventListener('click', () => {
    ecomTab.classList.add('active');
    sorterTab.classList.remove('active');
    // Update results based on ecom tab
});
