function generateParentheses(n) {
    const parentheses = [];
    for (let i = 0; i < n; i++) {
        parentheses.push("(", ")");
    }

    const result = [];

    function backtrack(path, options) {
        if (options.length === 0) {
            result.push(path.join(''));
            return;
        }

        for (let i = 0; i < options.length; i++) {
            const newPath = [...path, options[i]];
            const newOptions = [...options.slice(0, i), ...options.slice(i + 1)];

            backtrack(newPath, newOptions);
        }
    }

    backtrack([], parentheses);

    const filteredResult = result.filter(str => {
        let openCount = 0;
        let closeCount = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                openCount++
            } else {
                closeCount++
            };

            if (closeCount > openCount) {
                return false;
            }
        }
        return openCount === closeCount;
    });

    return new Set(filteredResult);
}

console.log(generateParentheses(0));
console.log(generateParentheses(1));
console.log(generateParentheses(3));