// function containsDuplicate(nums) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       //   console.log("i:" + i + " " + "j:" + j);
//       if (nums[i] === nums[j]) return true;
//     }
//   }

//   return false;
//   //O(N^2) time space O(N)
// }

// function containsDuplicate(nums) {
//   const hash_map = new Map();
//   for (var i = 0; i < nums.length; i++) {
//     if (hash_map.has(nums[i])) return true;

//     hash_map.set(nums[i], i);
//   }
//   return false;
//O(N) time complexity
// }

// function containsDuplicate(nums) {
//   const set = new Set(nums);
//   return new Set(nums) == nums.length ? false : true;
//complexity O(N)
// }

function containsDuplicate(nums) {
  return nums.sort().some((a, i) => a === nums[i + 1]);
  //O(logN)
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
