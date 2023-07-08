package Algorithms.Searching_Traversal;

// Binary Search in Java

class binarySearch {

    int binarySearchIterative(int array[], int x, int low, int high) {

        // Repeat until the pointers low and high meet each other
        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (array[mid] == x)
                return mid;

            if (array[mid] < x)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return -1;
    }

    int binarySearchRecursive(int array[], int x, int low, int high) {

        if (high >= low) {
            int mid = low + (high - low) / 2;

            // If found at mid, then return it
            if (array[mid] == x)
                return mid;

            // Search the left half
            if (array[mid] > x)
                return binarySearchRecursive(array, x, low, mid - 1);

            // Search the right half
            return binarySearchRecursive(array, x, mid + 1, high);
        }

        return -1;
    }

    public static void main(String args[]) {

        binarySearch ob = new binarySearch();
        int array[] = { 3, 4, 5, 6, 7, 8, 9 };
        int n = array.length;
        int x = 8;

        int resultI = ob.binarySearchIterative(array, x, 0, n - 1);
        if (resultI == -1)
            System.out.println("Not found");
        else
            System.out.println("Element found at index " + resultI + " using Iterative Method");

        int resultR = ob.binarySearchRecursive(array, x, 0, n - 1);
        if (resultR == -1)
            System.out.println("Not found");
        else
            System.out.println("Element found at index " + resultR + " using Recursive Method");
    }
}