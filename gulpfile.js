"use strict"
// nav burger
const burger = document.querySelector("#burger");
const links = document.querySelector(".links");
const anchors = document.querySelectorAll("a")

burger.addEventListener("click", () =>{
  links.classList.toggle("absolute");
  burger.classList.toggle("rotate");
});

anchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      links.classList.toggle("absolute");
      burger.classList.toggle("rotate");
    });
  });
