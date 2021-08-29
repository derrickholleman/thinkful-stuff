let timeOfDay = 0;
  
// Write your code here to use if statement to update imageOne and imageTwo based on timeOfDay
  if (timeOfDay < 12 ) {
    console.log('morning');
  }
  else if (timeOfDay > 12 && timeOfDay < 18 ) {
    console.log('day')
  }
  else {
    console.log('night')
  }