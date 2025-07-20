function removeDuplicatesFromSortedArray(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    for (let i = k; i < nums.length; i++) {
        nums[i] = "_";
    }

    return nums;
}

console.log(removeDuplicatesFromSortedArray([1, 1, 2]))
console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))