
// 1. Create a function that will take a list of numbers and return a new list of only the even numbers from the original list.

function filterEvens(nums) {
  const newList = nums.filter(num => {
    return num % 2 === 0;
  });
  return newList;
};
