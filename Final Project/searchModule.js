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

        const url = new URL('https://theaudiodb.p.rapidapi.com/discography.php');
        url.searchParams.append('s', searchTerm);

        const headers = new Headers({
            'X-RapidAPI-Key': '3eda83b516msh93822e3f1c3d372p17977cjsn11527fa03791',
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
        });

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });

            const data = await response.json();

            if (data && data.album && data.album.length) {
                data.album.forEach(item => {
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