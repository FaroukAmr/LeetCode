var maxSubArray = function(nums) {
    let max=nums[0]
    let currentmax=nums[0]
    for(let i=1;i<nums.length;i++){
        if(currentmax+nums[i]>nums[i]){
            currentmax+=nums[i]
        }else{
            currentmax=nums[i]
        }

        if(max<currentmax){
            max=currentmax
        }
    }
    return max
}