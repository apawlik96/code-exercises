function groupAnagrams (strs) {
    const result = [];
    const sortedWords = strs.map(str => str.split('').sort().join(''));

    const uniqueSortedKeys = [...new Set(sortedWords)];

    for (let i = 0; i < uniqueSortedKeys.length; i++) {
        const anagramGroup = [];

        for (let j = 0; j < strs.length; j++) {
            const sorted = strs[j].split('').sort().join('');
            if (sorted === uniqueSortedKeys[i]) {
                anagramGroup.push(strs[j]);
            }
        }

        result.push(anagramGroup);
    }

    return result;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

function uniqueStrings (strings) {
    strings.sort();
    const result = strings.filter((string, index) => string[index] !== string[index+1]);
    return result;
}

console.log(uniqueStrings(['aet', 'aet', 'ant', 'aet', 'ant', 'abt']))

