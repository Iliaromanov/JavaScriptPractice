
// O(n^2)
const bubbleSort = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      let a = nums[j];
      let b = nums[j+1];

      if (a > b) {
        nums[j] = b;
        nums[j+1] = a;
      };
    }
  }
  return nums;
};
