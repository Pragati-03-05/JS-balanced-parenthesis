//balanced paranthesis

const validPara = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let x = str.charAt(i);
    switch (x) {
      case '(': {
        stack.push(')');
        break;
      }
      case '{': {
        stack.push('}');
        break;
      }
      case '[': {
        stack.push(']');
        break;
      }
      default: {
        if (stack.pop() !== str[i]) {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
};
let str = '({})';
console.log('111111111111', validPara(str));
