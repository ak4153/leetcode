function filter_list(l) {
  const arr = [];
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") arr.push(l[i]);
  }
  return arr;
}

function filter_list(l) {
  return l.filter((num) => Number.isInteger(num));
}
