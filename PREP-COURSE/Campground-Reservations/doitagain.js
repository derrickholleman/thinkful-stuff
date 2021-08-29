const campgrounds = [
    { number: 1, view: "ocean", partySize: 8, isReserved: false },
    { number: 5, view: "ocean", partySize: 4, isReserved: false },
    { number: 12, view: "ocean", partySize: 4, isReserved: true },
    { number: 18, view: "forest", partySize: 4, isReserved: false },
    { number: 23, view: "forest", partySize: 4, isReserved: true },
    { number: 48, view: "desert", partySize: 8, isReserved: false }
];

// total campsites (return number)
function totalAvailable(arr) {
    return arr.length
}
console.log(totalAvailable(campgrounds))


// how many people can we host at max capacity (return number)
function maxCapacity(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        counter += arr[i].partySize
    }
    return counter
}
console.log(maxCapacity(campgrounds))

// which campsites are available to reserve (return object)
function availableToReserve(arr) {
    let availableCampsites = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isReserved === false) {
            availableCampsites.push(arr[i])
        }
    }
    return availableCampsites
}
console.log(availableToReserve(campgrounds))


// what's the capacity of the non reserved sites (return number)
function availableCapacity(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isReserved === false) {
            counter += arr[i].partySize
        }
    }
    return counter
}
console.log(availableCapacity(campgrounds))


// count campsites by type of view (return number)
function campsitesByView(arr, type) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].view === type) {
            counter++
        }
    }
    return counter
}
console.log(campsitesByView(campgrounds, 'ocean'))


// which campsites are available based on reserved status, specified view and party size. (return object.number) and for those that aren't available, return 'Sorry, no campsites with that view are available to host your party'
function availableBasedOnConditions(arr, type, size) {
    let availableCampsites = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isReserved === false && arr[i].view === type && arr[i].partySize >= size) {
            availableCampsites.push(arr[i].number)
        }
    }
    return availableCampsites.length > 0 ? availableCampsites : 'Sorry, no campsites with that view are available to host your party'
}
console.log(availableBasedOnConditions(campgrounds, 'ocean', 4))