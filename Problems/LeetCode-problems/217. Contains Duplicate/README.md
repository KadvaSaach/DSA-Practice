# 217. Contains Duplicate

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Example 1

```text
Input: nums = [1,2,3,1]
Output: true
```

## Example 2

```text
Input: nums = [1,2,3,4]
Output: false
```

## Example 3

```text
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Solution

```c++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> numSet;
    
        for (int num : nums) {
            if (numSet.count(num) > 0) {
                return true;
            }
            numSet.insert(num);
        }
        
        return false;
    }
};
```
