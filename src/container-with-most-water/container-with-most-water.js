function containerWithMostWater(height) {
    const scores = [];
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < i; j++) {
            const minHeight = Math.min(height[i], height[j]);
            const width = i - j;
            const area = minHeight * width;
            scores.push(area);
        }
    }

    return Math.max(...scores);
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
console.log(containerWithMostWater([1,8,6,2,5,4,8,3,1]))
console.log(containerWithMostWater([1,1]))
