let partyPeople = [
    { name: "Joe", attending: false },
    { name: "Jasmine", attending: true },
    { name: "Julio", attending: false },
    { name: "Julia", attending: true },
  ];
  
  // loop through each item
  // check if the person is attending (true or false)
  // if they are attending, say they are partying
  // otherwise, say they are burnt out
  for (let i = 0; i < partyPeople.length; i++) {
    if (partyPeople[i].attending) {
      console.log(partyPeople[i].name + " is partying!");
    } else {
      console.log(partyPeople[i].name + " is burnt out on partying :(");
    }
  }

  console.log('')

  let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].color)
}