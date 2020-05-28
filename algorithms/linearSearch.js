
// 1. Search a list of ints for a particular integer. Return the index location, -1 if not found.

const findNumber = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};


// 2. Search a list of ints for the last occurance of a particular integer. -1 if not found.

function FindLastOccurance(nums, target) {
  var greatestIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (i > greatestIndex) {
        greatestIndex = i;
      }
    }
  }
  return greatestIndex;
};


// 3. Search a list of ints for every occurance of a particular integer. Return a list of every index number. Empty list if not found. 

const everyOccuranceOf = (nums, target) => {
  let newList = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      newList.push(i);
    }
  }
  return newList;
};
