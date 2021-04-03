'use strict';


import { searchMeal } from '../handlers/searchMeal.handler.js';


const searchButton = document.getElementById('searchButton');
const searchFieldElement =document.getElementById('searchField');
searchButton.addEventListener('click', () => {
    searchMeal(searchFieldElement.value);
    searchFieldElement.value = '';
   
});
searchFieldElement.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchButton.click();
    }
});
