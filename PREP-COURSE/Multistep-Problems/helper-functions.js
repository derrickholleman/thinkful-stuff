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


// WRITING HELPER FUNCTIONS TO ADD A LIKE TO A PERSONS LIST

function findPerson(arr, name) {
  // function gets a persons name and returns their object
    for(let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return arr[i]
      }
    }
  }
  
  function addLike(arr, topic) {
    // adds a like to an array
    return arr.likes.push(topic)
  }

// add a new like to a persons list 
function addLikeToPerson(arr, name, topic) {
    let person = findPerson(arr, name);
    addLike(person, topic)
    return person
}
console.log(addLikeToPerson(people, 'Chris', 'cooking'))



// WITHOUT HELPER FUNCTIONS
// function addLikeToPerson(arr, name, topic) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name === name) {
//             arr[i].likes.push(topic)
//             return arr[i]
//         }
//     }
// }

// console.log(addLikeToPerson(people, 'Chris', 'Hunting'))


