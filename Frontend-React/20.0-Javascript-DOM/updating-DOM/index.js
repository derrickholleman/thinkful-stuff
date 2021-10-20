const descriptions = document.querySelectorAll(".description");

for (let description of descriptions) {
  let content = description.innerHTML;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content += "...";
  }
  description.innerHTML = content;
}

// dynamically add classes
const ratings = document.querySelectorAll(".rating .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue >= 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

// dynamically create a new element
const parks = document.querySelectorAll(".park");
const numberOfParks = parks.length;

const amountOfParksEl = document.createElement("div");
amountOfParksEl.textContent = `${numberOfParks} exciting parks to visit`;
amountOfParksEl.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(amountOfParksEl);
