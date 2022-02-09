// //Brute Force
// var containsNearbyAlmostDuplicate = function (nums, k, t) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (i === 2 && j === 7) {
//         console.log(i - j);
//         console.log(nums[i] - nums[j]);
//       }
//       if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) return true;
//     }
//   }
//   return false;
//   //complexity is O(N^2)
// };

// //bucket solution
// const containsNearbyAlmostDuplicate = (nums, k, t) => {
//   const bucket = {};
//   const w = t + 1;
//   for (var j = 0; j < nums.length; j++) {
//     const buck = Math.floor(nums[j] / w);
//     if (bucket.hasOwnProperty(buck)) {
//       return true;
//     } else {
//       bucket[buck] = nums[j];
//       if (
//         //the reason for checking -/+1 in buckets is that nearby numbers are x/t+1
//         bucket.hasOwnProperty(buck + 1) &&
//         Math.abs(bucket[buck + 1] - nums[j]) <= t
//       ) {
//         return true;
//       }
//       if (
//         //the reson for checking -/+1 in buckets is that nearby numbers are x/t-1

//         bucket.hasOwnProperty(buck - 1) &&
//         Math.abs(bucket[buck - 1] - nums[j]) <= t
//       ) {
//         return true;
//       }
//       //this is the most difficult to understand because
//       //you dont use 2 for loops but 1 and have to check if the indexes are in the window(k)
//       //so you check if j>=k

//       //lets say you have [1,2,3,4,1] k=1,t=0(t-0 true all the time),
//       //when : j==1>=k(1) we delete the most left item(1) aka window moves to the right
//       //j==2>=k(1) we move the window again, j-k <== is always the most left item in bucket
//       //k window is zero based
//       if (j >= k) {
//         delete bucket[Math.floor(nums[j - k] / w)];
//         //deletes the last item from the left because no longer in Index window(i-j)<=k
//       }
//     }
//   }
//   //explanation
//   //https://leetcode.com/problems/contains-duplicate-iii/discuss/824578/C%2B%2B-O(N)-time-complexity-or-Explained-or-Buckets-or-O(K)-space-complexity
//   return false;
// };

// //to sum up
// //t is the number that specifies the proximity of 2 numbers aka window (a-b<=t)
// //k is the number that specifies the proximity of the indexes of these numbers aka the index window
// //both of these conditions must be satisified simultaenously
// //if both of these are filled you can return true otherwise false

// // console.log(containsNearbyAlmostDuplicate([1, 5, 17, 6, 8], 5, 2));

function containsNearbyAlmostDuplicate(nums, k, t) {
  const sortedMap = nums.map((num, index) => {
    return { val: num, index: index };
  });
  sortedMap.sort((a, b) => a.val - b.val);
  console.log(sortedMap);
  var [leftPtr, rightPtr] = [0, 1];
  console.log(sortedMap[2]);
  while (rightPtr < nums.length) {
    const diff = Math.abs(sortedMap[leftPtr].val - sortedMap[rightPtr].val);
    const range = Math.abs(
      sortedMap[rightPtr].index - sortedMap[rightPtr].index
    );
    if (diff <= t && range <= k) {
      return true;
    } else if (diff <= t) {
      rightPtr++;
    } else leftPtr++;
    if (rightPtr === leftPtr) rightPtr++;
  }
  return false;
}

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 1, 3));
