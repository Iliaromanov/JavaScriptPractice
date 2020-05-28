
// 1. Search a list of ints for a particular integer. Return the index location, -1 if not found.

const findNumber = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
