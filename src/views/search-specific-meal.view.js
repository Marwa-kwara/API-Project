"use strict";
import { goBack } from "../listeners/goBack.listener.js";

export function renderSpecificMeal(
  strMeal,
  strMealThumb,
  strInstructions,
  strYoutube
) {
  const specificMealContainer = document.createElement("div");
  specificMealContainer.setAttribute("id", "specificMealContainer");

  const recipeImg = document.createElement("img");
  recipeImg.setAttribute("id", "img");
  recipeImg.style.width = "300px";
  recipeImg.style.borderRadius = "10%";
  recipeImg.src = strMealThumb;

  const recName = document.createElement("h1");
  recName.innerText = strMeal;
  recName.style.fontFamily = "Poiret One";
  recName.style.fontSize = "1.5rem";

  const instructions = document.createElement("p");
  instructions.innerText = strInstructions;
  instructions.style.fontFamily = "Poiret One";

  const link = document.createElement("a");
  link.href = strYoutube;
  link.style.fontFamily = "Poiret One";
  link.setAttribute("target", "_blank");
  link.innerText = "Find it on Youtube";

  const backButton = document.createElement("button");
  backButton.innerText = "Home";
  backButton.style.fontFamily = "Poiret One";
  backButton.setAttribute("id", "backButton");
  backButton.style.fontSize = "1.5rem";
  backButton.style.border = "none";

  specificMealContainer.append(
    recName,
    recipeImg,
    instructions,
    link,
    backButton
  );

  const specificResultsContainer = document.getElementById(
    "specificResultsContainer"
  );
  specificResultsContainer.appendChild(specificMealContainer);
  goBack();
}
