package back_joon;

import java.util.Scanner;

public class BJ_11047 {
    public static void main(String[] args) {
        // 최대한 큰 금액의 동전으로 구성함

        // 1. 가격이 큰 동전부터 내림차순으로 K보다 가격이 작거나 같은 동전이 나올 때까지 탐색한다.
        // 2. 탐색을 멈춘 동전의 가격으로 K로 나눠 몫은 동전 개수에 더하고, 나머지는 K값으로 갱신한다.
        // 3. 과정 1~2를 나머지가 0이 될 때까지 반복한다.

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int K = sc.nextInt();
        int[] A = new int[N];

        for (int i = 0; i < N; i++) {
            A[i] = sc.nextInt();
        }

        int c = 0; // 동전 수

        for (int i = N - 1; i >= 0; i--) {
            if (K >= A[i]) {
                c += K / A[i];
                K %= A[i];
            }
        }

        System.out.println(c);
    }

}
