

function expandArticleBody() {
  const expandBtns = document.querySelectorAll(".expand_button");
  expandBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let articleBody =
        btn.parentNode.parentNode.parentNode.querySelector(".article_body");
      if (btn.textContent === ">") {
        btn.textContent = "V";
        articleBody.style.display = "block";
      } else {
        btn.textContent = ">";
        articleBody.style.display = "none";
      }
    });
  });
}

function highlightArticle() {
  const highlightBtns = document.querySelectorAll(".highlightBtn");
  highlightBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let article = btn.parentNode.parentNode;
      if (btn.textContent === "+") {
        btn.textContent = "-";
        article.classList.add("highlight");
      } else {
        btn.textContent = "+";
        article.classList.remove("highlight");
      }
    });
  });
}
