import java.util.*;

public class insertionSort {
    void sort(int arr[]) {

        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    void printArray(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            System.out.println(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        selectionSort obj = new selectionSort();

        int arr[] = { 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0 };
        obj.sort(arr);
        System.out.println("Sorted Arrays ");
        obj.printArray(arr);

    }

}
