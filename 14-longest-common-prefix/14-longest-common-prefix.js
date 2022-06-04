var longestCommonPrefix = function(strs) {
    let longestPrefix=""
    strs.sort()
    for(let i=0;i<strs[0].length;i++){
        for(let j=0;j<strs.length;j++){
            if(strs[j].charAt(i)!=strs[0].charAt(i)){
                return longestPrefix;
            }
        }
        longestPrefix+=strs[0].charAt(i);
    }
    return longestPrefix
};