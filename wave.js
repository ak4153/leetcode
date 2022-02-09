// function wave(str) {
//   const ret = [];
//   for (i = 0; i < str.length; i++) {
//     !/[a-z]/g.test(str[i])
//       ? ""
//       : ret.push(
//           str.slice(0, i) +
//             str.slice(i, i + 1).toUpperCase() +
//             str.slice(i + 1).toLowerCase()
//         );
//   }
//   return ret;
// }

function wave(str) {
  return [...str]
    .map(
      (val, i) =>
        str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1)
    )
    .filter((val) => val != str);
}
const a = "alex";
console.log(wave("alex the king"));
console.log([...a]);
// const str = "alex";
// const strSplitted = str.split(" ");
// //return an array [ 'a', 'l', 'e', 'x' ]

// const strSliced = str.slice(0, 1);
// //return a string sliced "a"
// console.log(strSliced);
