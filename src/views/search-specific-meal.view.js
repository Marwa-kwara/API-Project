'use strict';

export function renderSpecificMeal(strMeal, strMealThumb, strInstructions, strYoutube){
    const mealContainer = document.createElement('div');
    mealContainer.setAttribute('id', 'mealContainer');

    const recipeImg = document.createElement('img');
    recipeImg.setAttribute('id', 'img');
    recipeImg.style.width = '300px';
    recipeImg.style.borderRadius = '10%'
    recipeImg.src = strMealThumb;
    mealContainer .appendChild(recipeImg);

    const recName = document.createElement('h1');
    recName.innerText = strMeal;
    recName.style.fontFamily = 'Poiret One';
    recName.style.fontSize = '1.5rem'
    mealContainer .appendChild(recipeButton);

    const instructions = document.createElement('p');
    instructions.innerText = strInstructions;
    instructions.style.fontFamily = 'Poiret One';
    mealContainer .appendChild(instructions);

    const link = document.createElement('a');
    link.href = strYoutube;
    console.log(link)
    link.innerText = 'Find it on Youtube';
    mealContainer .appendChild(link);
    
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.appendChild(mealContainer);
}
