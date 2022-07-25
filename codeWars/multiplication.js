const multiplicationTable = (number) => {
  let table = []
  for (let i = 1; i <= number; i++) {
    let array = [];
    for (let j = 1; j <= number; j++) {
      array.push(i * j)
    }
    table.push(array)
  }
  return table
}

console.log(multiplicationTable(5))