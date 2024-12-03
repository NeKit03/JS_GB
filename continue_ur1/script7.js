console.log("Задание 7");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const card = document.querySelector(".card");
card.insertBefore(newParagraph, card.firstChild);