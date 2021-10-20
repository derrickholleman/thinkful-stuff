function addHeadings() {
  const articles = document.querySelectorAll('article')

  for (let article of articles) {
      const articleContent = article.innerHTML
      article.innerHTML = `<h2>${articleContent}</h2>`
  }
}
addHeadings()

function styleTutorialsAndArticles() {
    const articles = document.querySelectorAll('article')

    for (let article of articles) {
        if (article.textContent.includes('Tutorial')) {
            article.classList.add('tutorial')
        } else {
            article.classList.add('article')
        }
    }
}
styleTutorialsAndArticles()

function separateAllTutorials() {
    const articles = document.querySelectorAll('article')
    const tutorials = document.createElement('section')
    const container = document.querySelector('.container')

    tutorials.classList.add('tutorials')
    container.appendChild(tutorials)

    for (let article of articles) {
        if (article.className === 'tutorial') {
            tutorials.appendChild(article)
        }
    }
}
separateAllTutorials()
