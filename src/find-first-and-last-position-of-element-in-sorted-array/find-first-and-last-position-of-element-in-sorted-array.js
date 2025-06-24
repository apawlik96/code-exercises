function findFirstAndLastPositionOfElementInSortedArray (nums, target) {
    const result = [];
    if(nums.indexOf(target) && nums.lastIndexOf(target)) {
        result.push(nums.indexOf(target), nums.lastIndexOf(target))
    } else {
        result.push(-1, -1)
    }
    return result;
}


console.log(findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10], 8))
console.log(findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10], 6))
console.log(findFirstAndLastPositionOfElementInSortedArray([5,-7,-7,8,8,10], -7))
console.log(findFirstAndLastPositionOfElementInSortedArray([5,-7,-7,8,8,10,20,20], 20))
console.log(findFirstAndLastPositionOfElementInSortedArray([], 0))