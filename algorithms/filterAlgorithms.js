
// 1. Create a function that will take a list of numbers and return a new list of only the even numbers from the original list.

const filterEvens = nums => {
  const newList = nums.filter(num => {
    return num % 2 === 0;
  });
  return newList;
};

// 2. Create a function that will take a string and return a new string with all the vowels converted to uppercase.

const upperVowels = word => {
  let newString = '';
  let newWord = [];

  for (let i = 0; i < word.length; i++) {
    newWord.push(word[i]);
  };

  newWord.forEach(letter => {
    letter.match(/[aeiou]/) ? newString += letter.toUpperCase() : newString += letter;
  });
  return newString;
};


// 3. Create a function that will take a list of names and return a new list of all names that start with a particular character.

const findNames = (names, target) => {
  let newNames = names.filter(name => {
    return name[0] === target;
  });
  return newNames;
};
