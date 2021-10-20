const formHandler = () => {
  const form = document.querySelector("#park-form");
  form.addEventListener("submit", submitHandler);
};

const submitHandler = (e) => {
  e.preventDefault();
  console.log("The form was submitted");

  const form = e.target;
  const formData = new FormData(form);
  const errors = validateForm(formData);

  // Clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // Display any new errors
  Object.keys(errors).forEach((key) => {
    // Find the specific error element
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });
  

  // ADD NEW PARK
  // if there are no errors
  if (!Object.keys(errors).length) {
    //create a new element
    const parkSection = document.createElement("section");

    // add the park class
    parkSection.classList.add("park-display");

    // construct the HTML for this element
    const content = `
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">${formData.get("description")}</div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${moment(formData.get("established")).format(
          "MMMM D, YYYY"
        )}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
    `;

    // set the innerHTML
    parkSection.innerHTML = content;

    //append to the main element
    document.querySelector("main").appendChild(parkSection);
  }
};

// helper function to validate if value exists
const validateExists = (value) => {
  return value && value.trim();
};

function validateForm(formData) {
  const errors = {};
  // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }

  // Check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  return errors;
}

window.addEventListener("DOMContentLoaded", formHandler);
