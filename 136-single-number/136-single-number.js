var singleNumber = function(nums) {
    let stack=[]
    let index=-1;
    for(let i=0;i<nums.length;i++){
        if(stack.indexOf(nums[i])!=-1){
            index=stack.indexOf(nums[i]);
            stack.splice(index,1);
        }else{
            stack.push(nums[i]);
        }
    }
    return stack
};