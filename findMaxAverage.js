// function findMaxAverage(nums, k) {
//   var currentMax = 0;
//   var sum = 0;
//   var window = nums.length - k;
//   if (nums.length == 1) return nums[0];
//   //got this pretty fast, the length of the window
//   for (var i = 0; i <= window; i++) {
//     sum = nums[i];

//     for (var j = i + 1; j < k + i; j++) {
//       sum += nums[j];
//     }
//     if (i == 0) {
//       currentMax = sum / k;
//     } else {
//       if (currentMax < sum / k) currentMax = sum / k;
//     }
//     sum = 0;
//   }
//   return currentMax;
// }

// function findMaxAverage(nums, k) {
//   var count = 0,
//     sum = 0,
//     n = 0,
//     max = -40000;
//   z = 0;
//   if (nums.length == 1) return nums[0];

//   if (nums.length < k) k = nums.length;

//   while (n <= nums.length - k) {
//     sum = sum + nums[count];
//     count++;
//     z++;
//     if (z >= k) {
//       if (max < sum / k) {
//         max = sum / k;
//       }
//       n++;
//       sum = 0;
//       count = n;
//       z = 0;
//     }
//   }
//   return max;
// }
//1, 1 , 1 . 13 2 2 . 8 3 3 . 2 , 4 4 .

// function findMaxAverage(nums, k) {
//   if (nums.length === 1) return nums[0];
//   var max = -4000,
//     sum = 0,
//     count = 0,
//     n = 0;
//   const hash = new Map();
//   nums.map((num, i) => {
//     hash.set(num, i);
//   });

//   while (n <= nums.length - k) {
//     sum = sum + nums[count + n];
//     if (count >= k - 1) {
//       if (max < sum / k) {
//         max = sum / k;
//       }
//       sum = 0;
//       hash.delete(nums[n]);
//       n++;
//       count = 0;
//     } else count++;
//   }
//   return max;
// }
// function findMaxAverage(nums, k) {
//   if (nums.length === 1) return nums[0];
//   var max = -4000,
//     sum = 0,
//     count = 0,
//     i = 0,
//     z = 0;
// //stop on i=6
//   while (i < nums.length) {
//     count++;
//     sum += nums[i];
//     if (count >= k) {
//       max = Math.max(max, sum / k);
//       sum = sum - nums[z];
//       z++;
//     }
//     i++;
//   }
//   return max;

//   //O(1)
// }

function findMaxAverage(nums, k) {
  if (nums.length === 1) return nums[0];
  var max = -4000,
    i = 0,
    sum = 0;

  while (i < nums.length) {
    sum += nums[i];

    i++;
    if (i >= k) {
      max = Math.max(max, sum / k);
      sum = sum - nums[i - k];
    }
  }
  return max;
}

console.log(findMaxAverage([3, 3, 4, 3, 0], 3));
//Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
