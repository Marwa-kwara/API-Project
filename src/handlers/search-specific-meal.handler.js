'use strict';

export function fetchSpecificMeal (strMeal) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData2) => {
        //console.log(jasonData);
//         const data2 = jsonData2.meals;
//         //console.log(data);
//         const searchResultsContainer = document.getElementById('searchResults');
//         searchResultsContainer.innerHTML = ''
//         data.forEach(element => {
//             const {idMeal, strMeal, strMealThumb, strInstructions} = element;
//             //renderSearchResult(idMeal, strMeal, strMealThumb);
//             console.log(idMeal, 'strMeal : ' , strMeal, 'strInstructions :' , strInstructions); 
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//         //to hid the result in error case
//        //
//       //renderData([]);
    })
 }
//strYoutube