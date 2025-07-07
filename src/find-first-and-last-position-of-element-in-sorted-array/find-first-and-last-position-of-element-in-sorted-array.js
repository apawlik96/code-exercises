function findFirstAndLastPositionOfElementInSortedArray (nums, target) {
    const idx = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === target) {
            idx.push(i)
        }
    }
    const result = []
    if(idx.length !== 0 ){
        result.push(idx[0], idx[idx.length-1])
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