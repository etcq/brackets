module.exports = function check(str, bracketsConfig) {
  let stack = []
  let checking = true
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if ((curr === '|' || curr == '7' || curr == '8') && stack[stack.length - 1] === curr) {
        stack.pop()
    } else {
      bracketsConfig.forEach(element => {
      if (curr == element[0]) {
        stack.push(curr)
      } else if (curr == element[1]) {
        if (element[0] !== stack.pop()) {
          checking = false;
        }
      }
    });  
    }
    
    if (checking === false) {
      return false
    }
  }
  return stack.length === 0;
  
}
