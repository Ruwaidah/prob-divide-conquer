function countZeroes(arr) {
  const length = arr.length;
  let leftSideIndex = 0;
  let rightSideIndex = arr.length - 1;
  while (arr[leftSideIndex] !== 0 && leftSideIndex <= rightSideIndex) {
    midIndex = Math.floor((leftSideIndex + rightSideIndex) / 2);
    if (arr[midIndex] === 1) {
      leftSideIndex = midIndex + 1;
    } else if (arr[midIndex] === 0) {
      rightSideIndex = midIndex - 1;
    }
  }
  return length - leftSideIndex;
}

// module.exports = countZeroes

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
