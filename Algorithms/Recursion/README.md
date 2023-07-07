# Recursive Algorithm

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. Recursion allows codes to get more compact and efficient by calling a similar function inside a function. This is kind of similar to looping functions, however, there are a huge number of differences. Recursion makes coding programs or solutions much faster and simpler.

Recursion also offers code redundancy, making it much more efficient to read and maintain codes.

## Properties of Recursion

- Performing the same operations multiple times with different inputs.
- In every step, we try smaller inputs to make the problem smaller.
- Base condition is needed to stop the recursion otherwise infinite loop will occur.

## Algorithm: Steps

The algorithmic steps for implementing recursion in a function are as follows:

```text
Step1 - Define a base case: Identify the simplest case for which the solution is known or trivial. This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

Step2 - Define a recursive case: Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.

Step3 - Ensure the recursion terminates: Make sure that the recursive function eventually reaches the base case, and does not enter an infinite loop.

step4 - Combine the solutions: Combine the solutions of the subproblems to solve the original problem.
```

## Stack Overflow error occurs in recursion?

If the base case is not reached or not defined, then the stack overflow problem may arise. Let us take an example to understand this.

```cpp
int fact(int n)
{
    // wrong base case (it may cause
    // stack overflow).
    if (n == 100)
        return 1;

    else
        return n*fact(n-1);
}
```

If `fact(10)` is called, it will call `fact(9)`, `fact(8)`, `fact(7)`, and so on but the number will never reach 100. So, the base case is not reached. If the memory is exhausted by these functions on the stack, it will cause a stack overflow error.

## Recursion VS Iteration

| **SR No.** |                        **Recursion**                        |                   **Iteration**                   |
| :--------: | :---------------------------------------------------------: | :-----------------------------------------------: |
|     1      |         Terminates when the base case becomes true.         |   Terminates when the condition becomes false.    |
|     2      |                    Used with functions.                     |                 Used with loops.                  |
|     3      | Every recursive call needs extra space in the stack memory. | Every iteration does not require any extra space. |
|     4      |                     Smaller code size.                      |                 Larger code size.                 |
