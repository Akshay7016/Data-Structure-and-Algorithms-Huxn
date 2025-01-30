function reverseString(str) {
  const stack = [];
  let reversedString = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }

  while (stack.length) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const originalString = "hello world";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: dlrow olleh
