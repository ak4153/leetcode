// var longestNiceSubstring = function (s) {
//   s = s.split("");
//   var max = "",
//     len = s.length;

//   for (var i = 0; i < len - 1; i++) {
//     let subStr = [s[i]];
//     for (var j = i + 1; j < len; j++) {
//       subStr.push(s[j]);
//       var isNice = true;

//       for (var c = 0; c < subStr.length; c++) {
//         if (
//           !subStr.includes(subStr[c].toLowerCase()) ||
//           !subStr.includes(subStr[c].toUpperCase())
//         ) {
//           c = subStr.length;
//           var isNice = false;
//         }
//       }
//       if (isNice && max.length < subStr.join("").length) max = subStr.join("");
//     }
//   }
//   return max;
//O(N^2 logN)
// };

var longestNiceSubstring = function (s) {
  var hash = {};
  for (var i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]] += 1;
    } else {
      hash[s[i]] = 1;
    }
  }
  //recurse
  for (var i = 0; i < s.length; i++) {
    if (hash[s[i].toLowerCase()] && hash[s[i].toUpperCase()]) {
      continue;
    }
    var s1 = longestNiceSubstring(s.slice(0, i));
    var s2 = longestNiceSubstring(s.slice(i + 1));
    return s1.length >= s2.length ? s1 : s2;
  }
  return s;
};
//O(N logN)
console.log(longestNiceSubstring("YazaAay"));

// console.log("YazaAay".slice(0, 2));
// //Ya
// console.log("YazaAay".slice(3));
//aAay
