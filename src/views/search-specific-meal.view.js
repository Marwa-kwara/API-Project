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
  recName.style.fontSize = "2.5rem";
  recName.style.fontWeight = "bold";
  recName.style.borderBottom = "1px solid";
  recName.style.padding = "6px";

  const instructions = document.createElement("p");
  instructions.innerText = strInstructions;
  instructions.style.fontFamily = "Open Sans";
  instructions.style.fontSize = "1.25rem";

  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");

  const span = document.createElement("span");
  span.style.boxShadow = "3px 3px 7px gray";

  const link = document.createElement("a");
  link.href = strYoutube;
  link.setAttribute("target", "_blank");
  link.style.color = "black";
  link.style.fontFamily = "Poiret One";
  link.style.textDecorationColor = "red";
  link.innerText = "Find it on Youtube";
  link.style.fontSize = "1.5rem";
  link.style.padding = "1px";
  span.appendChild(link);

  const backButton = document.createElement("button");
  backButton.innerText = "Home";
  backButton.style.fontFamily = "Poiret One";
  backButton.setAttribute("id", "backButton");
  backButton.style.fontSize = "1.5rem";
  backButton.style.border = "none";
  backButton.style.backGroundColor = "rgb(224, 224, 214)";
  backButton.style.boxShadow = "3px 3px 7px gray";
  homeDiv.append(span, backButton);

  specificMealContainer.append(recName, recipeImg, instructions, homeDiv);

  const specificResultsContainer = document.getElementById(
    "specificResultsContainer"
  );
  specificResultsContainer.appendChild(specificMealContainer);

  goBack();
}
