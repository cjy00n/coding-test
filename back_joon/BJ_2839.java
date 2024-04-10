package back_joon;

import java.util.*;

public class BJ_2839 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); // 배달할 kg
        int x = 0; // 3kg 갯수
        int y = N / 5; // 5kg 갯수

        System.out.printf("%d %d\n", x, y);
        while (true) {
            if (y < 0) {
                System.out.println(-1);
                break;
            }

            if (x * 3 + y * 5 == N) {
                System.out.println(x + y);
                break;
            }
            if ((N - y * 5) % 3 == 0) {
                x = (N - y * 5) / 3;
            } else {
                y--; // 3으로 나눠떨어지지 않으면 y를 감소
            }
        }
    }
}
