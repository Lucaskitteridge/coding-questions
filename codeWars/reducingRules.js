/* numbers: [ 2.0, 2.0, 3.0, 4.0 ]
rules: [ (a,b) => a + b, (a,b) => a - b ]
result: 5.0

You get a list of four numbers.
There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

The steps in progressing:
1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0

*/

const nums = [2.0, 2.0, 3.0, 4.0];
const rule1 = [(a, b) => a + b, (a, b) => a - b];
const rule2 = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

const reduceRules = (numbers, rules) => {
  return numbers.reduce((output, number, index) => {
    return rules[(index - 1) % rules.length](output, number);
  });
};

console.log(reduceRules(nums, rule1)); // 5
console.log(reduceRules(nums, rule2)); // 4
