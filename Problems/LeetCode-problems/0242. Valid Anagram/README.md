# 242. Valid Anagram

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example 1

```text
Input: s = "anagram", t = "nagaram"
Output: true
```

## Example 2

```text
Input: s = "rat", t = "car"
Output: false
```

## Constraints

- `1 <= s.length, t.length <= 5 * 10^4`.
- `s` and `t` consist of lowercase English letters.

## Solution

### C++

```c++
class Solution {
public:
    bool isAnagram(string s, string t) {

        if(s.length() != t.length())
        {
            return false;
        }

        sort(s.begin(), s.end());
        sort(t.begin(), t.end());

        int res = s.compare(t);

        if (res == 0)
        {
            return true;
        }else{
            return false;
        }
        
    }
};
```

### Python

```python
from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
```
