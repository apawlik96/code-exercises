const numbers = [10, 5, 8, 20, 3];
const largestNumber = numbers.reduce((acc, currentValue) => acc > currentValue ? acc : currentValue)
console.log(largestNumber)