class Solution {
    public static int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            int numI=nums[i];
            for (int j = 0+i+1; j < nums.length; j++) {
                if(i==j){
                    continue;
                }
                int numJ=nums[j];
                if (numI + numJ == target) {
                    return new int[] {i,j};
                }
            }



        }
        return null;
    }



   
}