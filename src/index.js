function towelSort(matrix) {
  if(!matrix || matrix.length === 0) {
    return [];
  }
  let input = [...matrix];
  input.forEach((el, index) => {
     if(index % 2 !== 0) {
       el.sort((a, b) => b - a)
     }
  })
  return input.flat() || [];
}

module.exports = towelSort;