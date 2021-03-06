destinations = [
    {
    location: 'San Carlos de Bariloche, Argentina',
    description: 'San Carlos de Bariloche, Argentina is known for winter sport. Recommended places to visit are Cathedral of Our Lady of Nahuel Huapi, Museo de la Patagonia and Cerro Otto.'
  },
  {
    location: 'Luang Prabang, Laos',
    description: 'Luang Prabang, Laos is known for places to eat and drink. Recommended places to visit are Pak Ou Caves, Wat Xieng Thong and Royal Palace.'
  },
  {
    location: 'Calgary, Canada',
    description: 'Calgary, Canada is known for dinner. Recommended places to visit are TELUS Spark, Glenbow Museum and Calgary Zoo.'
  },
  {
    location: 'Mecca, Saudi Arabia',
    description: 'Mecca, Saudi Arabia is known for natural attractions. Recommended places to visit are Kaaba, Safa and Marwa and Grand Mosque.'
  },
  {
    location: 'Maceió, Brazil',
    description: 'Maceió, Brazil is known for diving. Recommended places to visit are Museu da Imagem e do Som de Alagoas, Ponta Verde and Mundaú Lagoon.'
  },
  {
    location: 'Bilbao, Spain',
    description: 'Bilbao, Spain is known for drinks. Recommended places to visit are Guggenheim Museum Bilbao, Bilbao Fine Arts Museum and Bilbao Cathedral.'
  },
  {
    location: 'Malbork, Poland',
    description: 'Malbork, Poland is known for camping. Recommended places to visit are Malbork Castle, Muzeum Zamkowe w Malborku and Pałac Wielkiego Mistrza.'
  },
  {
    location: 'Bhubaneswar, India',
    description: 'Bhubaneswar, India is known for natural attractions. Recommended places to visit are Udayagiri, Lingaraja Temple and Nandankanan Zoological Park.'
  },
  {
    location: 'Nikko, Japan',
    description: 'Nikko, Japan is known for natural attractions. Recommended places to visit are Nikkō Tōshō-gū, Kegon Falls and Ryūzu Falls.'
  }
];

// finding a destination (case insensitive)
function findDestination(arr, place) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].location.toLowerCase().includes(place.toLowerCase()))
        return arr[i]
    }
}
console.log(findDestination(destinations, 'JAPAN'))

// made a helper function to get list of locations
function listOfLocations(arr) {
    let locations = []
    for (i = 0; i < arr.length; i++) {
        locations.push(arr[i].location)
    }
    return locations
}

// called helper function and joined locations with semi colon
function listDestinations(arr) {
    locations = listOfLocations(arr).join('; ')
    return `I can tell you about our current recommended destinations. Which one do you want to hear about? ${locations}. Enter a location for more info.`
}

console.log(listDestinations(destinations))