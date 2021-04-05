"use strict";
import { backFunction } from "../handlers/backFunction.handler.js";

export const goBack = () => {
  const backButton = document.getElementById("backButton");
  backButton.addEventListener("click", () => {
    backFunction();
  });
};
