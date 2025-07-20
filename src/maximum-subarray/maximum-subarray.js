function maximumSubarray(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let maxSum = nums[0];

    for (let start = 0; start < nums.length; start++) {
        let currentSum = 0;
        for (let end = start; end < nums.length; end++) {
            currentSum += nums[end];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

console.log(maximumSubarray([]))
console.log(maximumSubarray([1]))
console.log(maximumSubarray([5,4,-1,7,8]))
console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))