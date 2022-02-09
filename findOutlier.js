// function findOutlier(integers) {
//   const even = [];
//   const odd = [];
//   for (let i = 0; i < 3; i++) {
//     if (integers[i] % 2 == 0) even.push(integers[i]);
//     else odd.push(integers[i]);
//   }
//   const oddOrEven = odd.length > even.length ? "odd" : "even";

//   if (oddOrEven === "odd") {
//     for (let i = 0; i < integers.length; i++) {
//       if (integers[i] % 2 == 0) return integers[i];
//     }
//   } else {
//     for (let i = 0; i < integers.length; i++) {
//       if (integers[i] % 2 != 0) return integers[i];
//     }
//   }
// }
function findOutlier(integers) {
  return integers.slice(0, 3).filter(even).length >= 2
    ? integers.find(odd)
    : integers.filter(even);
}

function even(params) {
  return params % 2 == 0;
}

function odd(params) {
  return params % 2 != 0;
}
console.log(findOutlier([0, 1, 2]));
