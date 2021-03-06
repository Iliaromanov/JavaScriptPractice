
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


// 4. Search a list of strings for words that start with a substring. Return the first occurance index.

const findStringIndex = (strings, substring) => {
  for (let i = 0; i < strings.length; i ++) {
    if (strings[i].startsWith(substring)) {
      return i;
      }
  }
  return -1;
};


// 5. Search a list of strings for words that start with a substring. Return list of all the strings (not the index positions).

const filterStrings = (strings, substring) => {
  let newList = strings.filter(string => {
    return string.startsWith(substring);
  });
  return newList;
};
