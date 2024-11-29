function reverseInteger(num) {
  // Solution 2
  // return parseInt(num.toString().split("").reverse().join(""));

  // Solution 2
  // + is used to convert string to number (if string is numeric)
  return +num.toString().split("").reverse().join("");
}

console.log(1234, reverseInteger(1234));
console.log(453321, reverseInteger(453321));