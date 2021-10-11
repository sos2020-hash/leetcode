var isValid = function (s) {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      arr.push(map[c]);
    } else if (c !== arr.pop()) {
      return false;
    }
  }
  return !arr.length;
};
