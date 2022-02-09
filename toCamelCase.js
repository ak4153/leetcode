// function toCamelCase(str) {
//   //if empty return ""
//   if (str.length < 1) return "";

//   //split the string into the correct array -/_
//   const splitted =
//     str.split("-").length > str.split("_").length
//       ? str.split("-")
//       : str.split("_");

//   const isFirstCapital = str[0] === str[0].toUpperCase() ? true : false;
//   //a switch which we turn to false when first letter of the sentence is lowecased
//   var camelCase = true;

//   return (
//     splitted
//       //split each word to its own array
//       .map((word) =>
//         word
//           //split each letter into its own array
//           .split("")
//           //perform tests
//           .map((letter, k) => {
//             //first letter is capital, all else is capitalised
//             if (isFirstCapital && k == 0) return letter.toUpperCase();

//             if (!isFirstCapital && k == 0 && camelCase) {
//               camelCase = false;
//               return letter;
//             }

//             if (!isFirstCapital && k == 0 && !camelCase) {
//               return letter.toUpperCase();
//             }
//             return letter;
//           })
//           //join the letter into words
//           .join("")
//       )
//       //join the words into sentence
//       .join("")
//   );
// }
function toCamelCase(str) {
  var regEx = /[-]\w/gi;

  return str.length > 0
    ? str.replace(regEx, (match) => match.charAt(1).toUpperCase())
    : "";
}

// console.log(
//   "alex-the-king".replace(/[-]\w/gi, (a) =>
//     a.match(/[-]\w/gi).split("").toUpperCase().join("")
//   )
// );

console.log(toCamelCase("aaaaa-aaa"));

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
