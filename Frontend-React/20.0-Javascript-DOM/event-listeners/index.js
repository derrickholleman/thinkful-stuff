const firstBtn = document.querySelector("button");

// get info about which button was clicked
firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rateBtn");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // get section info for which button was clicked
    console.log(event.target.parentNode);
  });
});

// SORT PARKS BY NAME
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  // get main element
  const main = document.querySelector("main");
  // get list of parks
  const parksList = main.querySelectorAll(".park");

  // clear page in preparation for new order of items
  main.innerHTML = "";

  // Create an array
  const parksArray = Array.from(parksList);
  // sort the array
  parksArray.sort((a, b) => {
    const parkAName = a.querySelector("h2").textContent;
    const parkBName = b.querySelector("h2").textContent;
    return parkAName > parkBName ? 1 : -1;
  });

  // insert each park into the DOM
  parksArray.forEach((park) => main.appendChild(park));
});

// SORT PARKS BY RATING
const ratingSorter = document.querySelector("#rating-sorter");
ratingSorter.addEventListener("click", (event) => {
  event.preventDefault();
  
  const main = document.querySelector('main')
  const parksList = main.querySelectorAll('.park')
  
  main.innerHTML = ''

  const parksArray = Array.from(parksList)
  parksArray.sort((a, b) => {
    const parkARating = a.querySelector(".rating .value").textContent;
    const parkBRating = b.querySelector(".rating .value").textContent;
    return parkBRating - parkARating;
  });

  parksArray.forEach((park) => main.appendChild(park));
});
