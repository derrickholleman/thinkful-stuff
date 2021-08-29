// update format of track titles in array
let trackTitles = [
    "Sunshine Peak",
    "We're All Light",
    "Bring the Light",
    "Dancing through the Light",
    "Cold Light Generation",
    "Ray of Light",
    "The Inner Light",
];
// changing over all indexes in the array to a new value 
for (let i = 0; i < trackTitles.length; i++) {
    trackTitles[i] = `<p>${trackTitles[i]}</p>`
  }
  console.log(trackTitles)