package back_joon;

import java.util.Scanner;

public class BJ_1427 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        int N = str.length();

        int arr[] = new int[N];

        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(str.substring(i, i + 1));
        }

        // 선택 정렬
        for (int i = 0; i < N; i++) {
            int max = i;
            for (int j = i + 1; j < N; j++) {
                if (arr[j] > arr[max]) {
                    max = j;
                }
            }
            int temp = arr[max];
            arr[max] = arr[i];
            arr[i] = temp;
        }

        for (int i = 0; i < N; i++) {
            System.out.print(arr[i]);
        }
    }
}
