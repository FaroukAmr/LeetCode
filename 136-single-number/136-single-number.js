var singleNumber = function(nums) {
    nums.sort()
    for(let i=0;i<nums.length-1;i++){
        if(i%2!=0){
            continue;
        }
        if(nums[i]!=nums[i+1]){
            return nums[i];
        }
    }
    return nums.pop();
};