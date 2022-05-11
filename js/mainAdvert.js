//Get data from local storage
const nameL = localStorage.getItem("name");
const linkL = localStorage.getItem("link");
const descriptionL = localStorage.getItem("description");
const titleL = localStorage.getItem("title");
const imageL = localStorage.getItem("image");
const dateL = localStorage.getItem("date");

let image = document.getElementById("image");
let name = document.getElementById("name");
let title = document.getElementById("title");
let description = document.getElementById("description");
let link = document.getElementById("link")

image.style.backgroundImage = "url("+`"${imageL}"`+")";
name.textContent = "Posted on "+dateL+" by "+nameL;
title.textContent = titleL;
description.textContent = descriptionL;
link.textContent = linkL;
link.href = linkL; 

