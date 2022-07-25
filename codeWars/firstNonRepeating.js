const noRepeat = string => {
  const letterObject = {}
  let stringLower = string.toLowerCase()
  for(let letter of stringLower.split('')) {
    if(!letterObject[letter]) {
      letterObject[letter] = 1
    } else {
      letterObject[letter] += 1
    }
  }
  for(let letter of stringLower.split('')) {
    if(letterObject[letter] === 1) {
      return letter
    }
  }
}

console.log(noRepeat('GeeksforGeeks'))