function removeDuplicatesFromSortedArray(nums, k) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            result.push(nums[i])
        }
    }
    const substr = nums.length - k;
    for (let i = 0; i < substr; i++) {
        result.push("_")
    }
    return result
}

console.log(removeDuplicatesFromSortedArray([1, 1, 2], 2))
console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5))