# 202. Happy Number

Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process **ends in 1** are happy.
- Return `true` if `n` is a happy number, and `false` if not.

## Example 1

```text
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

## Example 2

```text
Input: n = 2
Output: false
```

## Constraints

- `1 <= n <= 2^31 - 1`

## Solution

### Python

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()
        while n != 1:
            digits = [int(digit) for digit in str(n)]
            n = sum([digit * digit for digit in digits])
            if n in visited:
                return False
            visited.add(n)
        return True
```

### C++

```cpp
class Solution {
public:
    bool isHappy(int n) {
        unordered_set <int> visited;
        while(n!=1)
        {
            int sum = 0;
            while(n > 0)
            {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
            if(visited.count(n) > 0)
            {
                return false;
            }
            visited.insert(n);
        }
        return true;
    }
};
```
