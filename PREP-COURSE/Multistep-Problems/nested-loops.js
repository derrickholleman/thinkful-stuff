let people = [
    {
      name: "Eliza",
      city: "Los Angeles",
      likes: ["pizza", "karaoke", "improv", "dancing"],
    },
    {
      name: "Shiela",
      city: "Denver",
      likes: ["photography", "painting", "movies"],
    },
    {
      name: "Ben",
      city: "Los Angeles",
      likes: ["pizza", "karate", "sci-fi", "poetry"],
    },
    {
      name: "Mohammed",
      city: "Los Angeles",
      likes: ["sailing", "golf", "kayaking"],
    },
    {
      name: "Yukiko",
      city: "Tokyo",
      likes: ["ramen", "karaoke", "jazz", "hamburgers"],
    },
    {
      name: "Chris",
      city: "Brooklyn",
      likes: ["pizza", "karaoke", "improv", "cooking"],
    },
];

// count the number of people who like particular topic
function countLikesByTopic(arr, topic) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].likes.length; j++) {
      if (arr[i].likes[j] === topic) {
        counter++
      }
    }
  } return counter
}
console.log(countLikesByTopic(people, 'pizza'))










function countLikesByTopic(arr, topic) {
    // create counter
    let counter = 0

    // loop through the collection of people
    for (let i = 0; i < arr.length; i++) {
        // loop through collection of likes for that person
        for (let j = 0; j < arr[i].likes.length; j++) {
            // if likes (at current index in array) at the current array index match topic, add 1 to counter
            if (arr[i].likes[j] === topic) {
                counter++            
            }
        }
    }
    return counter
}

console.log(countLikesByTopic(people, 'karaoke'))



