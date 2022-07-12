/* 
DESCRIPTION:
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

*/

const queueTime = function (customers, tills) {
  //If one till just reduce numbers
  if (tills === 1 && customers.length > 0) {
    return customers.reduce((prev, curr) => prev + curr);
  }
  //create a virtual version: two lines with a zero as the sum of each of their waittimes
  const arr = [];
  for (let x = 0; x < tills; x++) {
    arr.push(0);
  }
  //for each customer, look for the shortest line and then add this customers time to the shortest
  for (let i = 0; i < customers.length; i++) {
    const min = arr.indexOf(Math.min(...arr));
    arr[min] += customers[i];
  }
  //return the largest value in the array of times
  return Math.max(...arr);
};

console.log(queueTime([5, 3, 4], 1));
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10, 2, 3, 3], 2));
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

console.log(queueTime([2, 3, 10], 2));
// should return 12
