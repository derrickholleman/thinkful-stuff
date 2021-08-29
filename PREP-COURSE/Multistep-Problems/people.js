let people = [
    {
      name: "Eliza Pinelli",
      city: "Los Angeles",
      likes: ["pizza", "karaoke", "improv", "dancing"],
    },
    {
      name: "Shiela Vang",
      city: "Denver",
      likes: ["photography", "painting", "movies"],
    },
    {
      name: "Ben Dover",
      city: "Los Angeles",
      likes: ["pizza", "karate", "sci-fi", "poetry"],
    },
    {
      name: "Mohammed Jallah",
      city: "Los Angeles",
      likes: ["sailing", "golf", "kayaking"],
    },
    {
      name: "Yukiko Yang",
      city: "Tokyo",
      likes: ["ramen", "karaoke", "jazz", "hamburgers"],
    },
    {
      name: "Chris Johnson",
      city: "Brooklyn",
      likes: ["pizza", "karaoke", "improv", "cooking"],
    },
];

// count number of people in the data
function totalPeople(arr) {
  return arr.length
}
console.log(totalPeople(people))


// find all of the people from a particular city (return array)
function totalFromCity(arr, city) {
  let findCity = [] 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].city.includes(city)) {
      findCity.push(arr[i].name)
    }
  } return findCity
}
console.log(totalFromCity(people, 'Denver'))


// for a given person (first name only), get their city (return string)
function getCity(arr, person) {
  let city = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes(person)) {
      city += arr[i].city
    }
  }
  return city
}
console.log(getCity(people, 'Chris'))


// add a new like to a persons list (return object)
function addLikeToList(arr, person, topic) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes(person)) {
      arr[i].likes.push(topic)
      return arr[i]
    }
  }
}
console.log(addLikeToList(people, 'Ben', 'horse riding'))

// count the number of people who like particular topic (return number)
function totalLikes(arr, topic) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].likes.length; j++) {
      if (arr[i].likes[j].includes(topic)) {
        counter++
      }
    }
  } return counter
}
console.log(totalLikes(people, 'pizza'))
