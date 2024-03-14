public class PGS_161990 {
    public int[] solution(String[] wallpaper) {
        int minX = Integer.MAX_VALUE;
        int minY = Integer.MAX_VALUE;
        int maxX = Integer.MIN_VALUE;
        int maxY = Integer.MIN_VALUE;

        for (int i = 0; i < wallpaper.length; i++) {
            for (int j = 0; j < wallpaper[i].length(); j++) {
                if (wallpaper[i].charAt(j) == '#') {
                    minX = Math.min(minX,i);
                    minY = Math.min(minY,j);
                    maxX = Math.max(maxX,i+1);
                    maxY = Math.max(maxY,j+1);
                }
            }
        }

        int[] answer = {minX,minY,maxX,maxY};
        return answer;
    }
}
