var strStr = function(haystack, needle) {
    let total=0;
    let needleLength= needle.length
    let stackLength=haystack.length
    let index=-1;
    if(needle===""){
        return 0;
    }

    if(needleLength>stackLength){
        return -1;
    }
    if(haystack===needle){
        return 0;
    }

    for(let i=0;i<stackLength;i++){
       if(haystack.charAt(i)===needle.charAt(0)){
        for(let j=0;j<needleLength;j++){
            if(haystack.charAt(i+j)===needle.charAt(j)){
                
                total++
            }else{
                total=0;
                continue
            }
        }
        if(total===needleLength){
            return i;
        }
       }
       total=0
    }


    return -1;


};