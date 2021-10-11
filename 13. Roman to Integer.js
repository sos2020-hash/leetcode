var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let b = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      b -= obj[s[i]];
    } else {
      b += obj[s[i]];
    }
  }
  return b;
};
