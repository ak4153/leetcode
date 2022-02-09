function screen(arr) {
  const splittedArr = arr[0].split("");

  var count = 0;
  var flag = true;

  const splittedArrNumbers = splittedArr.map((num) => {
    if (num === "-" || num === "/" || num === ":") {
      return "-";
    }
    return parseInt(num);
  });

  if (
    splittedArrNumbers[0] === 4 ||
    splittedArrNumbers[0] === 5 ||
    (splittedArrNumbers[0] === 3 && splittedArrNumbers[1] === 7)
  ) {
  } else {
    return false;
  }

  if (splittedArrNumbers.length !== 17) {
    return false;
  }

  splittedArrNumbers.forEach((num) => {
    if (isNaN(num) && count !== 5) {
      flag = false;
    }
    if (count === 5 && num !== "-") {
      flag = false;
    }
    count++;

    if (count === 6 && !isNaN(num)) flag = false;
    if (count === 6) count = 0;
  });
  return flag;
}

const arr = ["37135-67890-12345"];
const arr1 = ["44135-678901-1245"];
const arr2 = ["35135-67890-12345"];
const arr3 = ["4135-6!190/1!1345"];

console.log(screen(arr));
console.log(screen(arr1));
console.log(screen(arr2));
console.log(screen(arr3));
