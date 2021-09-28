const formHandler = () => {
  const form = document.querySelector("#searchForm");
  form.addEventListener("submit", submitHandler);
};

const submitHandler = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const errors = validateForm(formData);

  const errorElement = document.createElement("div");
  errorElement.setAttribute("class", "error");
  errorElement.setAttribute("id", "searchError");
  form.appendChild(errorElement);

  // clear errors on new submission
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // Find the specific error element
  if (Object.keys(errors).length > 0) {
    errorElement.innerHTML = errors.searchError;
    errorElement.style.display = "block";
  }

  // get search input
  const searchInput = document.querySelector('#searchTerm').value

  // get all article elements 
  const articles = document.querySelectorAll('article > h2')
  for (let article of articles) {
      if (article.innerHTML.toLowerCase().includes((searchInput))) {
          article.parentNode.classList.remove('hidden')
      } else {
          article.parentNode.classList.add('hidden')
      }
  }

};

const validateExists = (value) => {
  return value && value.trim();
};
function validateForm(formData) {
  const errors = {};
  if (!validateExists(formData.get("searchTerm"))) {
    errors.searchError = `Please enter a search term`;
  }

  return errors;
}

window.addEventListener("DOMContentLoaded", formHandler);
