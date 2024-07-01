# 387. First Unique Character in a String

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`.

## Example 1

```text
Input: s = "leetcode"
Output: 0
```

## Example 2

```text
Input: s = "loveleetcode"
Output: 2
```

## Example 3

```text
Input: s = "aabb"
Output: -1
```

## Constraints

- `1 <= s.length <= 10^5`.
- `s` consists of only lowercase English letters.

## Solution

```c++
class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> cnt(26,0);

        for(char c:s)
        {
            cnt[c - 'a']++;
        }

        for(int i = 0; i < s.length(); i++)
        {
            if( cnt[ s[i] - 'a' ] == 1 )
            {
                return i;
            }
        }

        return -1;
    }
};
```
