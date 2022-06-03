var strStr = function(haystack, needle) {
    let total=0;
    let index=-1;
    if(needle===""){
        return 0;
    }

    if(needle.length>haystack.length){
        return -1;
    }
    if(haystack===needle){
        return 0;
    }

    for(let i=0;i<haystack.length;i++){
       if(haystack.charAt(i)===needle.charAt(0)){
        for(let j=0;j<needle.length;j++){
            if(haystack.charAt(i+j)===needle.charAt(j)){
                
                total++
            }else{
                total=0;
                continue
            }
        }
        if(total===needle.length){
            return i;
        }
       }
       total=0
    }


    return -1;


};