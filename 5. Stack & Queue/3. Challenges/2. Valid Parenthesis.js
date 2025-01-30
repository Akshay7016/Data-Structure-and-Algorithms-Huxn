const isValidParenthesis = (str) => {
  if (str.length === 0 || str.length % 2 === 1) {
    return false;
  }

  const stack = [];
  const brackets = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (!brackets[char]) {
      stack.push(char);
    } else {
      if (brackets[char] !== stack.pop()) {
        return false;
      }
    }
  }

  return true;
};

console.log(isValidParenthesis("")); // false
console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false
