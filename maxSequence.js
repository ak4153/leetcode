// //Kadanes Algorithm

// var maxSequence = function (array) {
//   var globalMax = 0,
//     localMax = 0;
//   for (let i = 0; i < array.length; i++) {
//     localMax = localMax + array[i];
//     if (localMax > globalMax) globalMax = localMax;
//     if (localMax < 0) localMax = 0;
//   }
//   return globalMax;
// };
// //O(N) time , O(1) space
//console.log(maxSequence([-2, 70, -3, -4, -50, -2, -1, 10, 4]));

// var maxSequence = function (array) {
//   if (array.lengh < 0) return 0;
//   var globalMax = 0,
//     localMax = 0;

//   for (let i = 0; i < array.length; i++) {
//     //assigns a running up number
//     //checks if the number is higher than the current max
//     //in case all of the array are negatives and only one num is positive
//     //k = i+1 because we already assigned a value for array[i] before
//     for (let k = i; k < array.length; k++) {
//       //adds a running up number to localMax
//       localMax = localMax + array[k];
//       console.log(localMax);
//       //checks if the sum is higher than globalMax
//       if (localMax > globalMax) globalMax = localMax;
//     }
//     //starts from the beginning
//     localMax = 0;
//   }
//   return globalMax;
// };
//complexity O(N^2) time

var maxSequence = function (array) {
  var sum = 0,
    max = 0;
  for (let i = 0, sum1 = 0, sum2 = 0; i < array.length; i++) {
    sum = sum + array[i];
    //11
    if (max > sum) {
      sum1 = maxSequence(array.slice(0, i));
      console.log("sum1:" + sum1);
      sum2 = maxSequence(array.slice(i + 1));
      console.log(" " + "sum2:" + sum2);
      return sum1 > sum2 ? sum1 : sum2;
    }
    max = sum;
  }
  return max;
};
//len = 6
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
