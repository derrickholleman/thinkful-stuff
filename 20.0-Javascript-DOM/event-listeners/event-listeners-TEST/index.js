function expandArticleBody() {
  const expandBtns = document.querySelectorAll(".expand_button");
  expandBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // set variable as currently clicked element
      let currentBtn = e.target
      // set variable as the closest element to currentBtn with a className of article
      let article = currentBtn.closest('.article')
      let articleBody = article.querySelector(".article_body");
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
expandArticleBody()

function highlightArticle() {
  const highlightBtns = document.querySelectorAll(".highlightBtn");
  highlightBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let currentBtn = e.target
      let article = currentBtn.closest('.article')
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
highlightArticle()
