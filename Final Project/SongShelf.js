export function initializeSearchFunctionality() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsSection = document.getElementById('results');

    searchButton.addEventListener('click', async () => {
        // Clear previous results
        resultsSection.innerHTML = '';

        // Fetch data from TheAudioDB API
        const searchTerm = searchInput.value;
        if (!searchTerm) {
            resultsSection.innerHTML = 'Please enter a search term.';
            return;
        }

        try {
            const response = await fetch('https://theaudiodb.p.rapidapi.com/searchalbum.php?a=' + searchTerm, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3eda83b516msh93822e3f1c3d372p17977cjsn11527fa03791',
                    'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
                }
            });
            
            const data = await response.json();

            // Display results
            if (data && data.album && data.album.length) {
                data.album.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.innerHTML = `
                        <h3>${item.strAlbum}</h3>
                        <button class="addToShelfButton">Add to Shelf</button>
                    `;
                    resultsSection.appendChild(resultItem);
                });
            } else {
                resultsSection.innerHTML = 'No results found.';
            }
        } catch (error) {
            resultsSection.innerHTML = 'Error fetching data. Please try again later.';
        }
    });
}

// Array to store songs/albums added by the user
let userShelf = [];

// Function to update the user's shelf display
function updateShelfDisplay() {
    const shelfSection = document.getElementById('shelf');
    shelfSection.innerHTML = '<h2>Your Shelf</h2>';
    userShelf.forEach(item => {
        const shelfItem = document.createElement('div');
        shelfItem.innerHTML = `
            <h3>${item.albumName || item.songName}</h3>
        `; // Using template literals as per requirements
        shelfSection.appendChild(shelfItem);
    });
}

export function initializeAddToShelfFunctionality() {
    const resultsSection = document.getElementById('results');
    const manualAddForm = document.getElementById('manualAddForm');

    // Add from search results
    resultsSection.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('addToShelfButton')) {
            const itemElement = event.target.parentElement;
            const itemName = itemElement.querySelector('h3').innerText;
            userShelf.push({ albumName: itemName }); // For simplicity, treating everything as an album
            updateShelfDisplay();
        }
    });

    // Manually add albums/songs
    manualAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const albumName = document.getElementById('albumName').value;
        const songName = document.getElementById('songName').value;
        if (albumName || songName) {
            userShelf.push({ albumName, songName });
            updateShelfDisplay();
        }
    });
}

import { initializeSearchFunctionality } from './searchModule.js';
import { initializeAddToShelfFunctionality } from './addToShelfModule.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize search functionality
    initializeSearchFunctionality();
    
    // Initialize "Add to Shelf" functionality
    initializeAddToShelfFunctionality();
});
