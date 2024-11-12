const scores = [89, 76, 91, 68, 85, 92];
const [firstNumb] = scores;
const [ , , , , , lastName] = scores;
scores.shift()
scores.pop()
const [...remainingNumb] = scores;
console.log(firstNumb, lastName, remainingNumb)