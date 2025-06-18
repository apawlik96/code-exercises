function containerWithMostWater(height) {
    const points = [];
    for(let i=0; i<height.length; i++) {
        points.push([i+1, height[i]])
    }
    const scores = [];
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < i; j++) {
            const minHeight = Math.min(points[i][1], points[j][1]);
            const width = Math.abs(points[i][0] - points[j][0]);
            const area = minHeight * width;
            scores.push(area);
        }
    }

    return Math.max(...scores);
}


console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
console.log(containerWithMostWater([1,8,6,2,5,4,8,3,1]))
console.log(containerWithMostWater([1,1]))
