function majorityElement (nums) {
    const counts = {};

    nums.forEach(num => {
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    });

    const maxValue = Math.max(...Object.values(counts));

    for (const key in counts) {
        if (counts[key] === maxValue) {
            return Number(key);
        }
    }
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))