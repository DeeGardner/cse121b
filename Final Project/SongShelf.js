import { initializeSearchFunctionality as initSearch } from './searchModule.js';
import { initializeAddToShelfFunctionality as initShelf } from './addToShelfModule.js';

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    
    initShelf();
});
