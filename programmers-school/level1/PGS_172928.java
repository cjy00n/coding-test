public class PGS_172928 {
    public int[] solution(String[] park, String[] routes) {
        int[] cur = {0, 0};

        // start 지점 찾기
        for (int i = 0; i < park.length; i++) {
            for (int j = 0; j < park[i].length(); j++) {
                if (park[i].charAt(j) == 'S') {
                    cur = new int[]{i, j};
                }
            }
        }

        for (String r : routes) {
            String op = r.split(" ")[0];
            int n = Integer.parseInt(r.split(" ")[1]);
            int[] direction = {0, 0};
            switch (op) {
                case "S":
                    direction[0] = 1;
                    break;


                case "N":
                    direction[0] = -1;
                    break;


                case "W":
                    direction[1] = -1;
                    break;

                case "E":
                    direction[1] = 1;
                    break;

                default:
                    break;
            }

            boolean flag = true;
            for (int i = 1; i <= n; i++) {
                if (!flag) break;
                int[] next = {cur[0] + direction[0] * i, cur[1] + direction[1] * i};

                if (!(next[0] >= 0 && next[1] >= 0 && next[0] < park.length &&
                        next[1] < park[0].length())) {
                    flag = false;
                    continue;
                }
                if (park[next[0]].charAt(next[1]) == 'X') {
                    flag = false;
                }
            }

            if (flag) {
                cur = new int[]{cur[0] + direction[0] * n, cur[1] + direction[1] * n};
            }
        }
        return cur;
    }

    public static class Main {
        public static void main(String[] args) {
            Solution s = new Solution();
            String[] park = {"OSO", "OOO", "OXO", "OOO"};
            String[] routes = {"E 2", "S 3", "W 1"};

            int[] answer = s.solution(park, routes);
            System.out.printf("[%d,%d]", answer[0], answer[1]);
        }
    }
}