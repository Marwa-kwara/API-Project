"use strict";

import { fetchMeal } from "../handlers/fetchMeal.handler.js";

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchMeal);
