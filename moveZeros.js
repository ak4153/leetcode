var moveZeros1 = function (array) {
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    for (let k = i + 1; k < array.length; k++) {
      if (array[i] === 0) {
        const curr = array[k];
        array[k] = 0;
        array[i] = curr;
      }
    }
  }
  return array;
};

var moveZeros2 = function (array) {
  var zeros = 0;
  return array
    .filter((a, index) => {
      if (a !== 0) return a;
      else if (a === 0) zeros++;
      if (index === array.length - 1 && zeros > 0) return 0;
    })
    .concat(Array(zeros).fill(0));
};

var moveZeros = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.slice(i, i + 1);
      array.push(0);
    }
  }
  return array;
};

console.log(moveZeros([1, 0, 3, 4, 0, 5]));
