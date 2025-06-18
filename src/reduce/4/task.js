const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, currentValue) => {
    return acc.concat(currentValue)
}, [])
console.log(flatArray) 