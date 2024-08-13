module.exports = function check(str, bracketsConfig) {
  let counter = 0
  for (let i of str) {
    bracketsConfig.map(arr => {
      if (arr[0] === i) {
        counter ++;
      } else if (arr[1] === i) {
        counter --;
      }
    })

    if (counter < 0) {
      return false
    }
  }

    return counter === 0
  
}
