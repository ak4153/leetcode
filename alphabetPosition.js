// function alphabetPosition(text) {
//   var ret = "";

//   for (let i = 0; i < text.length; i++) {

//     if (text[i].charCodeAt() < 123 && text[i].charCodeAt() > 96)
//       ret += text[i].charCodeAt() - 96 + " ";
//     if (text[i].charCodeAt() < 91 && text[i].charCodeAt() > 64)
//       ret += text[i].charCodeAt() - 64 + " ";
//   }
//   return ret.slice(0, ret.length - 1);
// }

function alphabetPosition(text) {
  //regex to return a-z with index -g and case insensitive -i
  const re = /[a-z]/gi;

  return text
    .toUpperCase()
    .match(re)
    .map((e) => e.charCodeAt() - 64)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
