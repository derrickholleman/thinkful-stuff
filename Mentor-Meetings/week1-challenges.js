// Write a function `sum` that computes the sum of the numbers in an array.
// sum([1, 3, 6]);

function sumOfNumbers(arr) {
    return arr.reduce((a, b) => a + b)
  }
  
  console.log(sumOfNumbers([1,3,6]))
  
  //  Write a function `max` that accepts an array of numbers and returns the *largest* number in the array.
  //max([1, 5, 10, 15]);
  
  function max(arr) {
    let sortedAges = arr.sort((a, b) => b - a);
    return sortedAges[0]
  }
  
  console.log(max([1, 5, 10, 15]))
  
  
  //   Use `split` to write a function `longestWord` that takes a string as an
  //   argument and returns the longest word.
  
  // longestWord('This is my string')
  
  function longestWord(str) {
    let strArray = str.split(' ')
    return strArray.reduce((a, b) => a.length < b.length ? b : a)
  }
  
  console.log(longestWord('This is my string'))
  
  // evens([1, 2, 3, 4, 5, 6, 7, 8]);
  
  function evens(arr) {
    let evensArray = []
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evensArray.push(arr[i])
      }
    }
    return evensArray
  }
  
  console.log(evens([1, 2, 3, 4, 5, 6, 7, 8]))
  
  
  //  Write a function `evenLengthWords` that takes an array of *strings* as an
  //   argument, and returns an array of just the words that have an even length.
  
  // evenLengthWords(['keep', 'don\'t']);
  
  function evenLengthWords(arr) {
    let evenWords = []
    for (i = 0; i < arr.length; i++) {
      if (arr[i].length % 2 === 0) {
        evenWords.push(arr[i])
      }
    }
    return evenWords
}

console.log(evenLengthWords(['keep', 'don\'t']))

// implement a function that accepts a string as an argument and
//   returns that string *reversed*.
//ex:  join("hello people")

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('hello people'))

//  Write a function `keep` that "keeps" certain elements in an array. The
//   function will need to take *two* arguments, an array, and something else --
//   the second argument will be what is used to determine which elements to keep.
let testArr = ['one', 'two', 'four']
let pleaseKeep = 'one'

function keep(arr, element) {
  let finalArray = []
  for (i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
          finalArray.push(arr[i])
      }
  }
  return finalArray;
}
console.log(keep(testArr, pleaseKeep))