package back_joon;

import java.util.*;

public class BJ_10926 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        sc.nextLine();

        int cnt = N;

        for (int i = 0; i < N; i++) {
            String tmp = sc.nextLine();
            Set<Character> set = new HashSet<Character>();

            for (int j = 0; j < tmp.length(); j++) {
                char ch = tmp.charAt(j);
                if (set.contains(ch) && j > 0 && tmp.charAt(j - 1) != ch) {
                    cnt--;
                    break;
                } else {
                    set.add(ch);
                }
            }

        }

        sc.close();

        System.out.println(cnt);


    }
}
