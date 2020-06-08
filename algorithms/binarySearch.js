
const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let result = nums[mid];

    if (result === target) {
      return mid;
    } else if (result < target) {
      left = mid;
    } else if (result > target) {
      right = mid;
    };
  };
};
