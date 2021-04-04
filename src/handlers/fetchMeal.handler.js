'use strict';

import { renderSearchResult} from '../views/searchResult.view.js';
import {fetchSpecificMeal} from '../handlers/search-specific-meal.handler.js'

export const fetchMeal = async () => {
  const searchFieldElement = document.getElementById('searchField')
  if (searchFieldElement.value.trim().length === 0){
      return;
  }
  searchMeal(searchFieldElement.value);
  searchFieldElement.value = ''; 

searchFieldElement.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      searchButton.click();
  }
});
 }

 export async function searchMeal (query) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(url);
  const jsonData =  await response.json();
  let id;
      console.log(jsonData);
      const data = jsonData.meals;
      console.log(data);
      const searchResultsContainer = document.getElementById('searchResults');
      searchResultsContainer.innerHTML = '';
      footerContainer.innerHTML = ''
      data.forEach(element => {
          let {idMeal, strMeal, strMealThumb,} = element;
          id = idMeal;
          renderSearchResult(idMeal, strMeal, strMealThumb);
      });
   }
