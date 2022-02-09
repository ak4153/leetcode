var countBits = function (n) {
  var res = 0;
  var binary = n.toString(2);
  for (var i = 0; i < binary.toString(2).length; i++) {
    if (binary[i] === "1") res++;
  }
  return res;
};
