# 108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

## Example 1

![btree1](./src/btree1.jpg)

```text
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:
```

![btree2](./src/btree2.jpg)

## Example 2

![btree](./src/btree.jpg)

```text
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
```

## Constraints

- `1 <= nums.length <= 10^4`
- `10^4 <= nums[i] <= 10^4`
- `nums` is sorted in a **strictly increasing order**.

## Solution

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
         return constructBST(nums, 0, nums.size() - 1);
    }

    TreeNode* constructBST(std::vector<int>& nums, int left, int right) 
    {
        if (left > right)
        {
            return nullptr;
        }
        
        int mid = left + (right - left) / 2;
        
        TreeNode* root = new TreeNode(nums[mid]);
        root->left = constructBST(nums, left, mid - 1);
        root->right = constructBST(nums, mid + 1, right);
        
        return root;
    }
};
```
