// Exercise 1
const arrOfNums = [9, 5, 1];
const sumOfCubes = arr =>
  arr.length === 0
    ? 0
    : arr.map(num => num ** 3).reduce((acc, cur) => acc + cur);
console.log(sumOfCubes(arrOfNums));

// Exercise 2
const arrOfNames = ['Zenek', 'Tomek', 'Basia', 'Ania', 'Robert'];
const societyName = arr => arr.map(name => name[0]).sort();
console.log(societyName(arrOfNames));

// Exercise 3
const arrayOfNumbers = [12, 5, 124, 59, 8];
const minMax = arr => [Math.min(...arr), Math.max(...arr)];
console.log(minMax(arrayOfNumbers));
