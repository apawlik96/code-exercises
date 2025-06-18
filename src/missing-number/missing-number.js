function missingNumber (nums) {
    if (nums.length === 1) return 0;
    nums.sort((a, b) => a - b);
    for(let i=0; i<nums.length - 1; i++) {
        if( nums[i+1] - nums[i] !== 1) return nums[i] + 1;
    }
    return nums[nums.length - 1] + 1;
}

console.log(missingNumber([0]))
console.log(missingNumber([0,1]))
console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))