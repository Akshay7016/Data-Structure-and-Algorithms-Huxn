function reverseString(str) {
    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }

    return reversedString;
}

console.log("Hello: ", reverseString("Hello"));
console.log("Apple: ", reverseString("Apple"));