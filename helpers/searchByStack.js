module.exports = function searchByStack(stack, searchElement) {

  if(!stack.size()) {
    return -1;
  }

  const temp = [];

  for(el in stack.storage) {
    const current = stack.storage[el];
    temp.push(current);
  }

  for (let i = 0; i < temp.length; i++) {
    if(temp[i] === searchElement) {
      return searchElement;
    }
  }

  return -1;
}