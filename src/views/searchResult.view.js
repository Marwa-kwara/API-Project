 export function renderSearchResult (idMeal, strMeal, strMealThumb){
    const showElementContainer = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = strMeal;
    showElementContainer .appendChild(button);
    const img = document.createElement('img');
    img.style.width = '150px',
    img.src = strMealThumb;
    showElementContainer .appendChild(img);
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.appendChild(showElementContainer);
}