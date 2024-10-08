/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];
  let result = "";

  for (let pron = 0; pron < pronoun.length; pron++) {
    for (let adject = 0; adject < adj.length; adject++) {
      for (let nouns = 0; nouns < noun.length; nouns++) {
        for (let dom = 0; dom < domain.length; dom++) {
          result += `${pronoun[pron]}${adj[adject]}${noun[nouns]}${domain[dom]}<br>`;
        }
      }
    }
  }
  document.getElementById("Generador").innerHTML = result;
};
