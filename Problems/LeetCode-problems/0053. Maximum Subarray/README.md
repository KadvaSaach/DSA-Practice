# 53. Maximum Subarray

Given an integer array `nums`, find the subarray  with the largest sum, and return its sum.

## Example 1

```text
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

## Example 2

```text
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

## Example 3

```text
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Solution

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int s = nums.length;
        int maxf = Integer.MIN_VALUE;
        int maxe = 0;
        for(int i=0; i<nums.length;i++){
            maxe = maxe + nums[i];
            if(maxf < maxe)
            {
                maxf = maxe;
            }
            if(maxe < 0)
            {
                maxe = 0;
            }
        }
        return maxf;
    }
}
```
