function restoreIpAddresses(s) {
    const result = [];
    
    function backtrack(path, remaining) {
        if (path.length === 4 && remaining.length === 0) {
            result.push(path);
            return;
        }
        
        if (path.length === 4 || remaining.length === 0) {
            return;
        }
        
        for (let i = 1; i <= 3; i++) {
            const segment = remaining.slice(0, i);
            
            if (segment.length > 1 && segment[0] === '0') continue;
            if (parseInt(segment) > 255) continue;
            
            backtrack([...path, segment], remaining.slice(i));
        }
    }
    
    backtrack([], s);
    return new Set(result.map(seg => seg.join('.')));
}

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));