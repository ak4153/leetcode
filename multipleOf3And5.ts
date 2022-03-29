class Challenge {
  static solution(number: number) {
    var acc = 0;
    for (let i = number - 1; i > 0; i--) {
      if (i % 3 === 0) {
        acc += i;
        continue;
      }
      if (i % 5 === 0) {
        acc += i;
        continue;
      }
    }
    return acc;
  }
}

console.log(Challenge.solution(10));
