// function towerBuilder(nFloors) {
//   var tower = [];
//   var star = "*";
//   for (let i = 1; i <= nFloors; i++) {
//     tower[i - 1] = " ".repeat(nFloors - i) + star + " ".repeat(nFloors - i);
//     star += "**";
//   }
//   return tower;
// }

function towerBuilder(nFloors) {
  return Array.from({ length: nFloors }, (value, index) => {
    const spaces = " ".repeat(nFloors - index - 1);
    return spaces + "*".repeat(index + index + 1) + spaces;
  });
}
console.log(towerBuilder(10));
