function capitalizeSentence(sentence) {
  return sentence.split(" ").map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
}

console.log("hello world : ", capitalizeSentence("hello world"))
console.log("akshay sajgule : ", capitalizeSentence("akshay sajgule"))