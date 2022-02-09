// const containsNearbyDuplicate = (nums, k) => {
//   const map = new Map();
//   for (var i = 0; i < nums.length; i++) {
//     const j = map.get(nums[i]);
//     if (map.has(nums[i]) && ~~(i - j) <= k) {
//       return true;
//     }
//     map.set(nums[i], i);
//   }
//   return false;
// };
//O(N) time cmplexity O(K) space complexity

const containsNearbyDuplicate = (nums, k) => {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1 + i; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (Math.abs(i - j) <= k) return true;
      }
    }
  }
  return false;
  //O(N^2) time 0(2N) space
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

/*

*/
