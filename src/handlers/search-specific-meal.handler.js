'use strict';
import { renderSpecificMeal } from '../views/search-specific-meal.view.js';
import {searchMeal} from '../handlers/fetchMeal.handler.js'

export function fetchSpecificMeal () {
    const idButton = document.getElementById('recipeButton').dataset.id;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idButton}`;
    console.log(idButton)
     const elementContainer = document.getElementById('img');
     elementContainer.src = ''
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        //console.log(jasonData);
        const data = jsonData.meals;
        //console.log(data);

        data.forEach(element => {
            const {idMeal, strMeal, strMealThumb, strInstructions, strYoutube} = element;
            //console.log(idMeal, strMeal, strMealThumb, strInstructions, strYoutube); 
            console.log(strYoutube)
            renderSpecificMeal(strMeal, strMealThumb, strInstructions, strYoutube)
        });
    })
    .catch((error) => {
        console.log(error);
    })
 }

