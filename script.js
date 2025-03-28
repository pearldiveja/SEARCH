/* style.css */
:root {
    --background-color: #121212;
    --text-color: #ffffff;
    --accent-color: #007bff;
    --button-hover: #0056b3;
}

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.search-section {
    text-align: center;
}

.title {
    font-size: 2rem;
    margin-bottom: 20px;
}

.search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-bar input[type="text"] {
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
    border: none;
}

.search-bar button {
    height: 40px;
    padding: 0 20px;
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.search-bar button:hover {
    background-color: var(--button-hover);
}

.upload-button {
    margin-left: 10px;
    height: 40px;
    padding: 0 15px;
    background-color: var(--accent-color);
    color: var(--text-color);
    border-radius: 5px;
    cursor: pointer;
}

.upload-button:hover {
    background-color: var(--button-hover);
}

.tabs {
    margin-top: 20px;
}

.tab {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #333333;
    color: var(--text-color);
    border-radius: 5px;
    cursor: pointer;
}

.tab.active {
    background-color: var(--accent-color);
}

.results {
    margin-top: 30px;
}
