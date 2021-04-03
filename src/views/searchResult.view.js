'use strict';

 export function renderSearchResult (idMeal, strMeal, strMealThumb){
    const showElementContainer = document.createElement('div');
    showElementContainer.setAttribute('id', 'showElementContainer');

    const recipeImg = document.createElement('img');
    recipeImg.setAttribute('id', 'img');
    recipeImg.style.width = '300px';
    recipeImg.style.borderRadius = '10%'
    recipeImg.src = strMealThumb;
    showElementContainer .appendChild(recipeImg);

    const recipeButton = document.createElement('button');
    recipeButton.setAttribute('id', 'recipeButton');
    recipeButton.innerText = strMeal;
    recipeButton.style.fontFamily = 'Poiret One';
    recipeButton.style.fontSize = '1.5rem'
    recipeButton.style.border = 'none';
    recipeButton.style.marginTop = '2px'
    showElementContainer .appendChild(recipeButton);
    
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.appendChild(showElementContainer);
}