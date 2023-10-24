let userShelf = [];

function updateShelfDisplay(shelfToDisplay = userShelf) {
    const shelfSection = document.getElementById('shelf');
    shelfSection.innerHTML = '<h2>Your Shelf</h2>';
    const shelfPlank = document.createElement('div');
    shelfPlank.className = 'shelfPlank';
    shelfSection.appendChild(shelfPlank);

    const albumContainer = document.createElement('div');
    albumContainer.className = 'albumContainer';
    
    shelfToDisplay.forEach(item => {
        const albumBox = document.createElement('div');
        albumBox.className = 'albumBox';
        const shelfItem = document.createElement('h3');
        
        if (item.releaseYear) {
            shelfItem.innerText = `${item.albumName} (${item.releaseYear})`;
        } else {
            shelfItem.innerText = item.albumName;
        }
    
        albumBox.appendChild(shelfItem);
        albumContainer.appendChild(albumBox);
    
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteAlbumButton';
        deleteButton.innerText = 'X';
        deleteButton.style.display = 'none';
        albumBox.appendChild(deleteButton);
    });    

    shelfSection.appendChild(albumContainer);

    new Sortable(albumContainer, {
        animation: 150,
        onEnd: function(evt) {
            const itemMoved = userShelf[evt.oldIndex];
            userShelf.splice(evt.oldIndex, 1);
            userShelf.splice(evt.newIndex, 0, itemMoved);
        }
    });
}

function filterAlbumsByName(keyword) {
    const filteredShelf = userShelf.filter(album => album.albumName.toLowerCase().includes(keyword.toLowerCase()));
    updateShelfDisplay(filteredShelf);  
}

export function initializeAddToShelfFunctionality() {
    const resultsSection = document.getElementById('results');
    const manualAddForm = document.getElementById('manualAddForm');

    document.getElementById('clearFilterButton').addEventListener('click', function() {
        updateShelfDisplay();  // This will display all albums as no filter is provided
        document.getElementById('filterName').value = '';  // Clear the filter input field
    });
    
    resultsSection.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('addToShelfButton')) {
            const itemElement = event.target.parentElement;
            const itemName = itemElement.querySelector('h3').innerText;
            userShelf.push({ albumName: itemName });
            updateShelfDisplay();
        }
    });

    manualAddForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const albumName = document.getElementById('albumName').value;
        const releaseYear = document.getElementById('releaseYear').value;
        
        if (!albumName) {
            alert("Please enter an album name.");
            return;
        }
        
        if (!releaseYear) {
            alert("Please enter the release year for the album.");
            return;
        }
    
        userShelf.push({ albumName, releaseYear });
        updateShelfDisplay();
    });    
    
    const editButton = document.getElementById('editButton');
    let isEditMode = false;

    editButton.addEventListener('click', () => {
        isEditMode = !isEditMode;
        const deleteButtons = document.querySelectorAll('.deleteAlbumButton');
        
        if (isEditMode) {
            deleteButtons.forEach(btn => btn.style.display = 'block');
        } else {
            deleteButtons.forEach(btn => btn.style.display = 'none');
        }
    });

    document.getElementById('shelf').addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('deleteAlbumButton')) {
            const albumIndex = Array.from(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
            userShelf.splice(albumIndex, 1);
            updateShelfDisplay();
        }
    });
    document.getElementById('filterButton').addEventListener('click', function() {
        const keyword = document.getElementById('filterName').value.trim();
        if (keyword) {
            filterAlbumsByName(keyword);
        } else {
            alert("Please enter a keyword or phrase to filter by.");
        }
    });    
}

