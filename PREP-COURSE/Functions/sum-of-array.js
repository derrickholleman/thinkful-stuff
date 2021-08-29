let goalsEachGame = [0, 1, 3];

function getTotalGoals(goals) {
    let sum = 0;
    for (let i = 0; i < goals.length; i++) {
      sum += goals[i];
    }
    return sum;
}
  
let total = getTotalGoals(goalsEachGame); 
console.log(total)