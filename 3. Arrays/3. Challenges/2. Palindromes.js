function isPalindrome(str) {
    return str === str.split("").reverse().join("");

    // let reversedString = "";

    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedString += str.charAt(i);
    // }

    // return str === reversedString;
}

console.log("abba: ", isPalindrome("abba"))
console.log("cddc: ", isPalindrome("cddc"));
console.log("Hello: ", isPalindrome("Hello"));