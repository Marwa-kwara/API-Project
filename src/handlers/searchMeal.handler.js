import { renderSearchResult } from '../views/searchResult.view.js';

export function searchMeal (query) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        //console.log(jasonData);
        const data = jsonData.meals;
        console.log(data);
        const searchResultsContainer = document.getElementById('searchResults');
        searchResultsContainer.innerHTML = ''
        data.forEach(element => {
            const {idMeal, strMeal, strMealThumb} = element;
            renderSearchResult(idMeal, strMeal, strMealThumb);
            console.log(idMeal, 'strMeal : ' , strMeal); 
        });
    })
    .catch((error) => {
        console.log(error);
        //to hid the result in error case
       //
      //renderData([]);
    })
}