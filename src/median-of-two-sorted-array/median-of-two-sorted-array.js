function medianOfTwoSortedArray (numsOne, numsTwo) {
    const nums = numsOne.concat(numsTwo).sort((a, b) => a - b);
    const length = nums.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
    } else {
        return nums[mid];
    }
}

console.log(medianOfTwoSortedArray([1,3],[2]))
console.log(medianOfTwoSortedArray([1,3],[2,4]))