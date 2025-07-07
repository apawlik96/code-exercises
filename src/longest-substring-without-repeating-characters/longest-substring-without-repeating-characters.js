function longestSubstringWithoutRepeatingCharacters (s) {
    if ([...new Set(s)].length === 1) return 1;

    const substring = [];
    for (let i=0; i<s.length; i++) {
        if(s.charAt(i) !== s.charAt(i+1)){
            substring.push(s.charAt(i))
        } else {
            substring.push("-")
        }
    }

    const result = [];
    let temp = [];

    for (let i = 0; i < substring.length; i++) {
        if (substring[i] === '-') {
            if (temp.length > 0) {
                result.push(temp);
                temp = [];
            }
        } else {
            temp.push(substring[i]);
        }
    }

    if (temp.length > 0) {
        result.push(temp);
    }

    const length = [];

    for (let i=0; i<result.length; i++) {
        length.push(new Set(result[i]).size)
    }

    return Math.max(...length);
}

console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb"));
console.log(longestSubstringWithoutRepeatingCharacters("bbbbb"));
console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"));