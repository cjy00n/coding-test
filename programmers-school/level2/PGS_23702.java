public class PGS_23702 {
    public int PGS_23702(int n) {
        int count = Integer.bitCount(n);
        int num = n+1;
        while(true){
            if(Integer.bitCount(num) == count) return num;
            else num ++;
        }
    }

    public static void main(String[] args) {
        PGS_23702 s = new PGS_23702();
        int answer = s.PGS_23702(78);
        System.out.println(answer);

    }
}
