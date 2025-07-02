function groupAnagrams (strs) {
    const result = [];
    const sortedWords = [];

    for (let i=0; i<strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        sortedWords.push(sorted);
    }

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

