package back_joon;

import java.util.*;

public class BJ_1012 {
    private static int[] dx = {1, 0, -1, 0};
    private static int[] dy = {0, -1, 0, 1};
    private static int T, M, N, K;
    private static int[][] map;
    private static boolean[][] visited;
    private static int cnt = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        T = sc.nextInt();

        for (int i = 0; i < T; i++) {
            M = sc.nextInt();
            N = sc.nextInt();
            K = sc.nextInt();
            map = new int[M][N];
            visited = new boolean[M][N];
            cnt = 0;

            for (int j = 0; j < K; j++) {
                int x = sc.nextInt();
                int y = sc.nextInt();
                map[x][y] = 1;
            }

            for (int j = 0; j < M; j++) {
                for (int k = 0; k < N; k++) {
                    if (!visited[j][k] && map[j][k] == 1) {
                        cnt++;
                        bfs(j, k);
                    }
                }
            }
            System.out.println(cnt);
        }

        sc.close();
    }

    public static void bfs(int x, int y) {
        visited[x][y] = true;

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{x, y});


        while (!queue.isEmpty()) {
            int curX = queue.peek()[0];
            int curY = queue.peek()[1];

            queue.poll();

            for (int i = 0; i < 4; i++) {
                int nextX = curX + dx[i];
                int nextY = curY + dy[i];

                if (nextX >= 0 && nextY >= 0 && nextX < M && nextY < N && !visited[nextX][nextY] && map[nextX][nextY] == 1) {
                    visited[nextX][nextY] = true;
                    queue.add(new int[]{nextX, nextY});
                }
            }
        }
    }
}

