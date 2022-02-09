// var isPalindrome = function (x) {
//   const xstring = x.toString();
//   const straight = xstring.split("");
//   const reverse = xstring.split("").reverse();
//   var flag = false;

//   for (var i in reverse) {
//     if (reverse[i] !== straight[i]) return false;
//   }
//   return true;
// };

var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  let reverse = 0;
  while (x > reverse) {
    reverse = (x % 10) + reverse * 10; //rev = 3
    x = ~~(x / 10); //x=344
    console.log(`x:${x}, reverse:${reverse}`);
  }
  return x === reverse || ~~(reverse / 10) === x;
};
console.log(isPalindrome(122));
console.log(0 % 10);
