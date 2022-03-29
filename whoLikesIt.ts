export const likes = (a: string[]): string => {
  var retStr = '';

  if (a.length === 1) {
    return a[0] + ' likes this';
  }
  if (a.length === 2) {
    return a[0] + ' and ' + a[1] + ' like this';
  }
  if (a.length === 3) {
    retStr = a[0] + ', ' + a[1] + ' and ' + a[2] + ' like this';
    return retStr;
  }
  if (a.length > 3) {
    a.map((name, index) => {
      if (index === 1) {
        retStr =
          retStr.concat(name) +
          ' and ' +
          (a.length - 2).toString() +
          ' others like this';
      }
      if (index === 0) {
        retStr = retStr.concat(name) + ', ';
      }
    });
    return retStr;
  }
  return 'no one likes this';
};

console.log(likes(['Alex', 'Yuval']));
