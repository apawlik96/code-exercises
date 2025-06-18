function findFirstAndLastPositionOfElementInSortedArray (nums, target) {
    const result = [];
    for (let i=0; i<nums.length; i++) {
        if(nums[i] === target) result.push(i)
    }
    if (result.length === 0) result.push(-1, -1)
    return result;
}

console.log(findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10], 8))
console.log(findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10], 6))
console.log(findFirstAndLastPositionOfElementInSortedArray([5,-7,-7,8,8,10], -7))
console.log(findFirstAndLastPositionOfElementInSortedArray([5,-7,-7,8,8,10,20,20], 20))
console.log(findFirstAndLastPositionOfElementInSortedArray([], 0))