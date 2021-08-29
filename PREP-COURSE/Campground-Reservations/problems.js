const campgrounds = [
    { number: 1, view: "ocean", partySize: 8, isReserved: false },
    { number: 5, view: "ocean", partySize: 4, isReserved: false },
    { number: 12, view: "ocean", partySize: 4, isReserved: true },
    { number: 18, view: "forest", partySize: 4, isReserved: false },
    { number: 23, view: "forest", partySize: 4, isReserved: true },
    { number: 43, view: "desert", partySize: 4, isReserved: false }
    ];
// total campsites 
function campsiteCount(arr) {
    return arr.length
}

console.log(campsiteCount(campgrounds))

// how many can we host at max capacity (return array)
function campgroundCapacity(arr) {
    let totalPeople = []
    for (i = 0; i < arr.length; i++) {
        totalPeople.push(arr[i].partySize)
    }
    return totalPeople.length > 0 ? totalPeople.reduce((a, b) => a + b) : 0
}
console.log(campgroundCapacity(campgrounds))

// which campsites are available to reserve (return array)
function availableCampsites(arr) {
    let isAvailable = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isReserved === false) {
            isAvailable.push(arr[i])
        }
    }
    return isAvailable
}
console.log(availableCampsites(campgrounds))

// what's the capacity of the non reserved sites (return number)
function additionalCapacity(arr) {
    let totalAvailable = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isReserved === false) {
            totalAvailable.push(arr[i].partySize)
        }
    }
    return totalAvailable.reduce((a, b) => a + b)
}
console.log(additionalCapacity(campgrounds))

// count campsites by type of view (return number)
function countByView(arr, type) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].view === type) {
            counter++
        }
    }
    return counter
}
console.log(countByView(campgrounds, 'forest'))

// which campsites are available based on view and party size
function findMyCampsites(arr, type, size) {
    let availableCampsites = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isReserved === false && arr[i].view === type && size <= arr[i].partySize) {
            availableCampsites.push(arr[i].number)
        }
    }
    return availableCampsites.length > 0 ? availableCampsites : 'Sorry, no campsites with that view are available to host your party'
}
console.log(findMyCampsites(campgrounds, "ocean", 4))