b# Sorting

Sorting is the process of arranging the elements of an array so that they can be placed either in ascending or descending order. For example, consider an array A = {A1, A2, A3, A4, ?? An }, the array is called to be in ascending order if element of A are arranged like A1 > A2 > A3 > A4 > A5 > ? > An .

## Sorting Algorithms

Sorting algorithms are described in the following table along with the description.

| **SN** | **Sorting Algorithms** |                                                                                                                                                                  **Description**                                                                                                                                                                  |
| :----: | :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **1**  |      Bubble Sort       |                                                          It is the simplest sort method which performs sorting by repeatedly moving the largest element to the highest index of the array. It comprises of comparing each element to its adjacent element and replace them accordingly.                                                           |
| **2**  |      Bucket Sort       |                                                                 Bucket sort is also known as bin sort. It works by distributing the element into the array also called buckets. In this sorting algorithms, Buckets are sorted individually by using different sorting algorithm.                                                                 |
| **3**  |       Comb Sort        |                                                                                Comb Sort is the advanced form of Bubble Sort. Bubble Sort compares all the adjacent values while comb sort removes all the turtle values or small values near the end of the list.                                                                                |
| **4**  |     Counting Sort      |                             It is a sorting technique based on the keys i.e. objects are collected according to keys which are small integers. Counting sort calculates the number of occurrence of objects and stores its key values. New array is formed by adding previous key elements and assigning to objects.                              |
| **5**  |       Heap Sort        |                                                                                    In the heap sort, Min heap or max heap is maintained from the array elements deending upon the choice and the elements are sorted by deleting the root element of the heap.                                                                                    |
| **6**  |     Insertion Sort     |                                                                           As the name suggests, insertion sort inserts each element of the array to its proper place. It is a very simple sort method which is used to arrange the deck of cards while playing bridge.                                                                            |
| **7**  |       Merge Sort       |                                              Merge sort follows divide and conquer approach in which, the list is first divided into the sets of equal elements and then each half of the list is sorted by using merge sort. The sorted list is combined again to form an elementary sorted array.                                               |
| **8**  |       Quick Sort       |                                                                                  Quick sort is the most optimized sort algorithms which performs sorting in O(n log n) comparisons. Like Merge sort, quick sort also work by using divide and conquer approach.                                                                                   |
| **9**  |       Radix Sort       |                                                                                              In Radix sort, the sorting is done as we do sort the names according to their alphabetical order. It is the lenear sorting algorithm used for Inegers.                                                                                               |
| **10** |     Selection Sort     | Selection sort finds the smallest element in the array and place it on the first place on the list, then it finds the second smallest element in the array and place it on the second place. This process continues until all the elements are moved to their correct ordering. It carries running time O(n2) which is worst than insertion sort. |
| **11** |       Shell Sort       |                                                                                         Shell sort is the generalization of insertion sort which overcomes the drawbacks of insertion sort by comparing elements separated by a gap of several positions.                                                                                         |

## Time Complexity and Space Complexity

<table>
<thead>
  <tr>
    <th rowspan="2">Algorithm</th>
    <th colspan="3">Time Complexity</th>
    <th>Space Complexity</th>
  </tr>
  <tr>
    <th>  Best</th>
    <th>Average</th>
    <th>Worst</th>
    <th>Worst</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Selection Sort</td>
    <td>Ω(n^2)</td>
    <td>θ(n^2)</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Bubble Sort</td>
    <td>Ω(n)</td>
    <td>θ(n^2)</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Insertion Sort</td>
    <td>Ω(n)</td>
    <td>θ(n^2)</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Heap Sort</td>
    <td>Ω(n log(n))</td>
    <td>θ(n log(n))</td>
    <td>O(n log(n))</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Quick Sort</td>
    <td>Ω(n log(n))</td>
    <td>θ(n log(n))</td>
    <td>O(n^2)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Merge Sort</td>
    <td>Ω(n log(n))</td>
    <td>θ(n log(n))</td>
    <td>O(n log(n))</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Bucket Sort</td>
    <td>Ω(n +k)</td>
    <td>θ(n +k)</td>
    <td>O(n^2)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Radix Sort</td>
    <td>Ω(nk)</td>
    <td>θ(nk)</td>
    <td>O(nk)</td>
    <td>O(n + k)</td>
  </tr>
  <tr>
    <td>Count Sort</td>
    <td>Ω(n +k)</td>
    <td>θ(n +k)</td>
    <td>O(n +k)</td>
    <td>O(k)</td>
  </tr>
  <tr>
    <td>Shell Sort</td>
    <td>Ω(n log(n))</td>
    <td>θ(n log(n))</td>
    <td>O(n^2)</td>
    <td>O(1)</td>
  </tr>
  <tr>
    <td>Tim Sort</td>
    <td>Ω(n)</td>
    <td>θ(n log(n))</td>
    <td>O(n log (n))</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Tree Sort</td>
    <td>Ω(n log(n))</td>
    <td>θ(n log(n))</td>
    <td>O(n^2)</td>
    <td>O(n)</td>
  </tr>
  <tr>
    <td>Cube Sort</td>
    <td>Ω(n)</td>
    <td>θ(n log(n))</td>
    <td>O(n log(n))</td>
    <td>O(n)</td>
  </tr>
</tbody>
</table>

### Bubble Sort

**Bubble Sort** is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

The average and worst-case complexity of Bubble sort is O(n2).

Bubble short is majorly used where

- complexity does not matter
- simple and shortcode is preferred

#### Bubble Sort Algorithm

In the algorithm given below, suppose arr is an array of n elements. The assumed swap function in the algorithm will swap the values of given array elements.

```plaintext
begin BubbleSort(arr)
   for all array elements
      if arr[i] > arr[i+1]
         swap(arr[i], arr[i+1])
      end if
   end for
   return arr
end BubbleSort
```

### Selection Sort

**Selection sort** is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

The average and worst-case complexity of selection sort is O(n2).

Selection sort is generally used when -

- A small array is to be sorted.
- Swapping cost doesn't matter.
- It is compulsory to check all elements.

#### Selection Sort Algorithm

```plaintext
SELECTION SORT(arr, n)

Step 1: Repeat Steps 2 and 3 for i = 0 to n-1
Step 2: CALL SMALLEST(arr, i, n, pos)
Step 3: SWAP arr[i] with arr[pos]
[END OF LOOP]
Step 4: EXIT

SMALLEST (arr, i, n, pos)
Step 1: [INITIALIZE] SET SMALL = arr[i]
Step 2: [INITIALIZE] SET pos = i
Step 3: Repeat for j = i+1 to n
if (SMALL > arr[j])
     SET SMALL = arr[j]
SET pos = j
[END OF if]
[END OF LOOP]
Step 4: RETURN pos
```

### Insertion Sort

To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element. The average case and worst case is O(n^2^).

Insertion sort has various advantages such as

- Simple implementation
- Efficient for small data sets
- Adaptive, i.e., it is appropriate for data sets that are already substantially sorted.

#### Insertion Sort Algorithm

The simple steps of achieving the insertion sort are listed as follows

```plaintext
Step 1 - If the element is the first element, assume that it is already sorted. Return 1.

Step 2 - Pick the next element, and store it separately in a key.

Step 3 - Now, compare the key with all elements in the sorted array.

Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.

Step 5 - Insert the value.

Step 6 - Repeat until the array is sorted.
```

### Merge Sort

Merge sort is similar to the quick sort algorithm as it uses the divide and conquer approach to sort the elements. It is one of the most popular and efficient sorting algorithm. It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves. We have to define the merge() function to perform the merging.

#### Merge Sort Algorithm

```plaintext
MERGE_SORT(arr, beg, end)

if beg < end
set mid = (beg + end)/2
MERGE_SORT(arr, beg, mid)
MERGE_SORT(arr, mid + 1, end)
MERGE (arr, beg, mid, end)
end of if

END MERGE_SORT
```

### Quick Sort

**QuickSort** is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.

After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array

#### Choosing the pivot

Picking a good pivot is necessary for the fast implementation of quicksort. However, it is typical to determine a good pivot. Some of the ways of choosing a pivot are as follows -

- Pivot can be random, i.e. select the random pivot from the given array.
- Pivot can either be the rightmost element of the leftmost element of the given array.
- Select median as the pivot element.

#### Quick Sort Algorithm

Algorithm:

```plaintext
quickSort(array, leftmostIndex, rightmostIndex)
  if (leftmostIndex < rightmostIndex)
    pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
    quickSort(array, leftmostIndex, pivotIndex - 1)
    quickSort(array, pivotIndex, rightmostIndex)

partition(array, leftmostIndex, rightmostIndex)
  set rightmostIndex as pivotIndex
  storeIndex <- leftmostIndex - 1
  for i <- leftmostIndex + 1 to rightmostIndex
  if element[i] < pivotElement
    swap element[i] and element[storeIndex]
    storeIndex++
  swap pivotElement and element[storeIndex+1]
return storeIndex + 1
```
