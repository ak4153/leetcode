function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a && c + a > b) return true;

  return false;
}
