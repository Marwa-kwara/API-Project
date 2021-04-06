"use strict";

export function backFunction() {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  const searchResults2 = document.getElementById("specificResultsContainer");
  searchResults2.innerHTML = "";
  const backGroundImg = document.querySelector("#main-container");
  const imagePath = "img1.jpeg";
  backGroundImg.style.background = `url("${imagePath}")`;
}
