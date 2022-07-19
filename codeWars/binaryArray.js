/*An Array consisting of "0" and "1"'s also called a binary array is given as an input.

Task

Find the length of the longest contiguous subarray which consists of Equal number of "0"s and "1"s.

example:

s = [1,1,0,1,1,0,1,1]
         |_____|
            |      
         [0,1,1,0]
         
         length = 4
*/

const binaryArray = (array) => {
  let zero = 0
  let one = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      zero += 1
    } else {
      one += 1
    }
  }
  if(zero === one) {
    return array.length
  }
}

console.log(binaryArray([0,1])) //2
console.log(binaryArray([1,1,0,1,1,0,1,1])) // 4
console.log(binaryArray([0,1,1,0,1,1,1,0,0,0])) // 10
console.log(binaryArray([0,0,1,1,1,0,0,0,0,0])) // 6
