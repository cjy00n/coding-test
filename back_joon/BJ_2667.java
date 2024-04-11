package back_joon;

import java.util.*;

public class BJ_2667 {
    public static int dx[] = {1, 0, -1, 0};
    public static int dy[] = {0, -1, 0, 1};
    public static int[][] map;
    public static boolean[][] visited;
    public static int N;
    public static ArrayList<Integer> apartNums = new ArrayList<>();
    public static int apartCnt = 0;
    public static int totalCnt = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();

        map = new int[N][N];
        visited = new boolean[N][N];


        for (int i = 0; i < N; i++) {
            String input = sc.next();
            for (int j = 0; j < N; j++) {
                map[i][j] = input.charAt(j) - '0';
            }
        }
        sc.close();

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (!visited[i][j] && map[i][j] == 1) {
                    totalCnt++;
                    bfs(i, j);
                    apartNums.add(apartCnt);
                }
            }
        }
        Collections.sort(apartNums);

        System.out.println(totalCnt);
        for (int i = 0; i < apartNums.size(); i++) {
            System.out.println(apartNums.get(i));
        }

    }

    public static void bfs(int x, int y) {
        apartCnt = 1;
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{x, y});
        visited[x][y] = true;

        while (true) {
            if (queue.isEmpty()) break;

            int curX = queue.peek()[0];
            int curY = queue.peek()[1];
            queue.poll();

            for (int i = 0; i < 4; i++) {
                int nextX = curX + dx[i];
                int nextY = curY + dy[i];

                if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < N && !visited[nextX][nextY] && map[nextX][nextY] == 1) {
                    queue.add(new int[]{nextX, nextY});
                    visited[nextX][nextY] = true;
                    apartCnt++;
                }
            }
        }
    }
}
