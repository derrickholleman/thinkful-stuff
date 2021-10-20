let names = ["Mark Fisher", "Ira Bennett", "Denise Hicks", "Julius Patterson"];

function printNames(names) {
  names.forEach((name) => {
    console.log(name);
  });
}
printNames(names);
// --------------------------------------------- //

let trees = [
  {
    type: "oak",
    height: "30m",
  },
  {
    type: "elm",
    height: "21m",
  },
];

function logTreeType(trees) {
    trees.forEach(tree => {
        console.log(tree.type)
    });
}
logTreeType(trees)
// --------------------------------------------- //

let points = [6, 7, 1, 3, 1, 17, 4, 12, 1, 5, 0, 13, 15];

function totalPoints(points) {
    let total = 0
    points.forEach(point => {
        total += point
    });
    return total
}
console.log(totalPoints(points))
// --------------------------------------------- //

let words = ["I'm", "looking", "for", "the", "man", "who", "shot", "my", "paw"];

function buildSentence(words) {
    let finalSentence = ''
    words.forEach(word => {
        finalSentence += word + " "
    });
    return finalSentence
}
console.log(buildSentence(words))
// --------------------------------------------- //

let decimals = [0.75, 0.91, 0.48, 0.23, 0.99, 0.83, 1.1];

function logPercentages(decimals) {
    decimals.forEach(decimal => {
        console.log(`${(decimal * 100).toFixed(0)}%`)
    });
}
logPercentages(decimals)
