function combinations(n, k) {
    const result = [];
    const newArray = Array.from(new Array(n), (_, index) => index + 1);

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

    createCombinations(newArray, k);

    return result;
}

console.log(combinations(4, 2))
console.log(combinations(1, 1))