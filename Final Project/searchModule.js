export function initializeSearchFunctionality() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsSection = document.getElementById('results');

    searchButton.addEventListener('click', async () => {
        resultsSection.innerHTML = '';

        const searchTerm = searchInput.value;
        if (!searchTerm) {
            resultsSection.innerHTML = 'Please enter a search term.';
            return;
        }

        const options = {
            method: 'GET',
            url: 'https://theaudiodb.p.rapidapi.com/discography.php',
            params: { s: searchTerm },
            headers: {
                'X-RapidAPI-Key': '3eda83b516msh93822e3f1c3d372p17977cjsn11527fa03791',
                'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            
            if (response.data && response.data.album && response.data.album.length) {
                response.data.album.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('resultItem');
                    resultItem.innerHTML = `
                        <h3>${item.strAlbum} (${item.intYearReleased})</h3>
                        <button class='addToShelfButton'>Add to Shelf</button>
                    `;
                    resultsSection.appendChild(resultItem);
                });
            } else {
                resultsSection.innerHTML = 'No results found.';
            }

        } catch (error) {
            console.error('API Fetch Error: ', error);
            resultsSection.innerHTML = 'Error fetching data. Please try again later.';
        }
    });
}
