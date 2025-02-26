const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const wordCount = words.reduce((acc, currentValue) => {
    acc[currentValue] ? acc[currentValue] += 1 : acc[currentValue] = 1
    return acc;
}, {})
console.log(wordCount)