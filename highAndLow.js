// function highAndLow(numbers) {
//   var nums = numbers.split(" ");
//   var max = Number.parseInt(nums[0]),
//     min = Number.parseInt(nums[0]);

//   for (let i = 1; i < nums.length; i++) {
//     if (Number.parseInt(nums[i]) > max) {
//       max = Number.parseInt(nums[i]);
//     } else if (Number.parseInt(nums[i]) < min) min = Number.parseInt(nums[i]);
//   }
//   return `${max} ${min}`;
// }

function highAndLow(numbers) {
  var nums = numbers.split(" ").map(Number);
  return Math.max(...nums) + " " + Math.min(...nums);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
