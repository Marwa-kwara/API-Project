"use strict";

import { fetchMeal } from "../handlers/fetchMeal.handler.js";

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchMeal);

const searchFieldElement = document.getElementById("searchField");
searchFieldElement.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    searchButton.click();
  }
});
