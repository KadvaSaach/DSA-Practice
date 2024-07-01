# 136. Single Number

Given a **non-empty** array of integers `nums`, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Example 1

```text
Input: nums = [2,2,1]
Output: 1
```

## Example 2

```text
Input: nums = [4,1,2,1,2]
Output: 4
```

## Example 3

```text
Input: nums = [1]
Output: 1
```

## Constraints

- `1 <= nums.length <= 3 * 10^4`.

- `-3 * 104 <= nums[i] <= 3 * 10^4`.

- Each element in the array appears twice except for one element which appears only once.

## Solution

### Python

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hashMap = {}

        for num in nums:
            if num not in hashMap:
                hashMap[num] = 1
            else:
                del hashMap[num]
        
        return list(hashMap.keys())[0]
```

</br>

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        
        for num in nums:
            result ^= num
        
        return result
```

### C++

```c++
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        unordered_map<int,int> res;

        for(int num : nums)
        {
            if (res.find(num) == res.end()) 
            {
                res[num] = 1;
            } else {
                res.erase(num);
            }
        }
        
        return res.begin()->first;
    }
};
```
