function narcissistic(value) {
  //   const strValue = value.toString();
  //   var sum = 0;
  //   console.log(strValue.split(""));

  //   for (let i = 0; i < strValue.length; i++) {
  //     sum += Math.pow(parseInt(strValue[i]), strValue.length);
  //   }
  //   return sum === value ? true : false;

  return value
    .toString()
    .split("")
    .map((x, i, array) => (array[i] = x ** array.length))
    .reduce((prev, curr) => prev + curr) == value
    ? true
    : false;
}

console.log(narcissistic(371));
// const arr = [1, 2, 3];

// arr.map((a, i, array) => (array[i] = 1));
// console.log(arr);
/*
1 0 [ 1, 2, 3, 4, 5, 6 ]
2 1 [ 1, 2, 3, 4, 5, 6 ]
3 2 [ 1, 2, 3, 4, 5, 6 ]
4 3 [ 1, 2, 3, 4, 5, 6 ]
5 4 [ 1, 2, 3, 4, 5, 6 ]
6 5 [ 1, 2, 3, 4, 5, 6 ]
*/
