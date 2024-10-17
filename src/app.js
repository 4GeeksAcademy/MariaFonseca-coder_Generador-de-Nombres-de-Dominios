/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let pronounOptions = ["the", "our"];
  let adjetiveOptions = ["great", "big"];
  let nounOptions = ["jogger", "racoon"];
  let domainOptions = [".com", ".net", ".us", ".io"];
  let uniqueResult = [];

  pronounOptions.forEach(chosenPronoun => {
    adjetiveOptions.forEach(chosenAdjetive => {
      nounOptions.forEach(chosenNoun => {
        domainOptions.forEach(chosenDomain => {
          uniqueResult.push(
            `${chosenPronoun}${chosenAdjetive}${chosenNoun}${chosenDomain}`
          );
        });
      });
    });
  });
  document.getElementById("Generador").innerHTML = uniqueResult.join("<br>");
};
