const isUnique = (str) => {
  if (str.length > 128) return false;
  const letter = str[0];
  for (var i = 0; i < str.length - 1; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) return false;
    }
  }
  return true;
};

const isUnique1 = (str) => {
  const char_set = [];
  for (var i = 0; i < 128; i++) {
    char_set.push(false);
  }
  for (var i = 0; i < str.length - 1; i++) {
    if (char_set[str[i].charCodeAt()] === true) {
      return false;
    }
    char_set[str[i].charCodeAt()] = true;
  }
  return true;
};
// O(N) complexity N = length of the string
const str = "wber";
// console.log(isUnique(str));
