/* DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

const validParen = (string) => {
  if (!string) {
    return true;
  }
  if (string.length % 2 !== 0) {
    return false;
  }
  const openingArray = [];
  for (let paren of string.split("")) {
    if (paren === "{" || paren === "(" || paren === "[") {
      openingArray.push(paren);
    } else if (paren === "}" && openingArray[openingArray.length - 1] === "{") {
      openingArray.pop();
    } else if (paren === ")" && openingArray[openingArray.length - 1] === "(") {
      openingArray.pop();
    } else if (paren === "]" && openingArray[openingArray.length - 1] === "[") {
      openingArray.pop();
    } else {
      return false;
    }
  }
  if (openingArray.length === 0) {
    return true;
  }
  return false;
};

console.log(validParen("(")); // false
console.log(validParen(")(()))")); // false
console.log(validParen("()")); // true
console.log(validParen("(())((()())())")); // true
