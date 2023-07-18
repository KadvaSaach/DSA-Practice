# 169. Majority Element

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## Example 1

```text
Input: nums = [3,2,3]
Output: 3
```

## Example 2

```text
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

Constraints:

- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

## Solution

```c++
class Solution {
public:
    int majorityElement(vector<int>& nums) {

        int cnt = 0;
        int val = 0;

        for (int num : nums)
        {
            if(cnt == 0 )
            {
                val = num;
            }
            // cnt += (num == val) ? 1 : -1;

            if(num == val)
            {
                cnt++;
            }
            else {
                cnt--;
            }
        }

        return val;

    }
};
```
