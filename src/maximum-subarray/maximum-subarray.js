function maximumSubarray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }
    
    return maxGlobal;
}

console.log(maximumSubarray([1]))
console.log(maximumSubarray([5,4,-1,7,8]))
console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))