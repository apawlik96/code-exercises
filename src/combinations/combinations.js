function combinations(n, k) {
    const result = [];
    const nums = [];

    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    const stack = [];

    function createCombinations(array, k) {
        if (k === 0) {
            result.push([...stack]);
            return;
        }

        for (let i = 0; i <= array.length - k; i++) {
            stack.push(array[i]);
            createCombinations(array.slice(i + 1), k - 1);
            stack.pop();
        }
    }

    createCombinations(nums, k);

    return result;
}

console.log(combinations(4, 2))
console.log(combinations(1, 1))