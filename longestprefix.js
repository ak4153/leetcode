var longestCommonPrefix = function (strs) {
  var prefix = strs[0];
  for (var i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length == 0) return "";
    }
  }
  return prefix;
};
const strs = ["a", "ab", "abc", ""];

// console.log(strs.length);//4
console.log(longestCommonPrefix(strs));
