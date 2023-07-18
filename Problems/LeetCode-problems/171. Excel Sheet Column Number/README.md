# 171. Excel Sheet Column Number

Given a string `columnTitle` that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

```text
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
```

## Example 1

```text
Input: columnTitle = "A"
Output: 1
```

## Example 2

```text
Input: columnTitle = "AB"
Output: 28
```

## Example 3

```text
Input: columnTitle = "ZY"
Output: 701
```

## Solution

```c++
class Solution {
public:
    int titleToNumber(string columnTitle) {
        int res = 0;

        for(char temp : columnTitle)
        {
            int val = temp - 'A' + 1;
            res = res * 26 + val; 
        }
        return res;
    }
};
```
