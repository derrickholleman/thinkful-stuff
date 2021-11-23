function missing1(arr) {
  let N = arr.length + 1;
  for (let i = 1; i < N; i++) {
    let found = false;
    let j = 0;

    while (!found && j < arr.length) {
      if (i === arr[j]) {
        found = true;
      }
      j++;
    }

    if (!found) {
      return i;
    }
  }
}

function missing2(arr) {
  let N = arr.length + 1;
  let fullSum = (N * (N + 1)) / 2;
  let sum = arr.reduce((acc, num) => (acc += num), 0);
  return fullSum - sum;
}

module.exports = {
  missing1,
  missing2,
};
