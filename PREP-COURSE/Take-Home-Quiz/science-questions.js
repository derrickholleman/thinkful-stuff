const sampleAnswers = [
    {
      question: 'What is the phase where chromosomes line up in mitosis?',
      response: 'Metaphase',
      isCorrect: true,
      isEssayQuestion: false
    },
    {
      question: 'What anatomical structure connects the stomach to the mouth?',
      response: 'Esophagus',
      isCorrect: true,
      isEssayQuestion: false
    },
    {
      question: 'What are lysosomes?',
      response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
      isCorrect: true,
      isEssayQuestion: true
    },
    {
      question: 'True or False: Prostaglandins can only constrict blood vessels.',
      response: 'True',
      isCorrect: false,
      isEssayQuestion: false
    }
];

// Write a function named countCorrectAnswers that: takes in an array of student answers and returns the number of answers that have isCorrect set to true. If none of the responses are correct, return 0.
function countCorrectAnswers(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isCorrect === true) {
            counter++
        } 
    } return counter
}
console.log(countCorrectAnswers(sampleAnswers))

// Write a function named filterAnswersByType that: takes in an array of student answers and returns an array of the answers that have isEssayQuestion set to true. If none of the answers are essay questions, return an empty array.
function filterAnswersByType(arr) {
    let essayQuestions = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isEssayQuestion === true) {
            essayQuestions.push(arr[i])
        }
    } return essayQuestions.length > 0 ? essayQuestions : []
}
console.log(filterAnswersByType(sampleAnswers))

// Write a function named findAnswer that: takes in two arguments: an array of student answers, and a string for the question to match and returns the object in the sampleAnswers array that matches that question. (takes in a question string and returns an object) If none of the student's answers match the question, return undefined. If more than one of the students' answers match the question, return the first one in the array
function findAnswer(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].question === str) {
            return arr[i]
        }
    } return undefined
}
console.log(findAnswer(sampleAnswers, 'True or False: Prostaglandins can only constrict blood vessels.'))

// Write a function named checkForPlagiarism that: takes two arguments: an array of student answers, and snippet of text to check returns true if any of the essay question responses contain the text, and returns false otherwise.
function checkForPlagiarism(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isEssayQuestion && arr[i].response.includes(str)) {
            return true
        }
    } return false
}
console.log(checkForPlagiarism(sampleAnswers, 'this string does not appear in the responses')) // false
// checkForPlagiarism(sampleAnswers, 'spherical vesicles that contain hydrolytic enzymes'); //=> true