public class PGS_12940 {
    // 최대공약수 => 유클리드 호제법
    // 큰수 % 작은 수  = 나머지
    // 작은 수가 큰수, 나머지가 작은 수 됨
    // 나머지가 0일때까지 반복 후
    // 그때의 작은 수가 최대공약수임
    // 최소공배수는 두 값을 곱한 후 최대공약수로 나누기

    // while문 사용
    public int[] PGS_12940_1(int n, int m) {
        int[] answer = {};
        int p = n*m;

        while(n%m!=0){
            int mod = n%m;
            n = m;
            m=mod;
        }

        answer = new int [] {m, p/m};
        return answer;
    }

    // 재귀함수 사용
    public int[] PGS_12940(int n, int m) {
        int gcd = gcd(n,m);

        int []answer = new int [2];
        answer[0] = gcd;
        answer[1] = n*m/gcd;

        return answer;
    }

    public static int gcd(int n,int m){
        if(m==0) return n;
        return gcd(m,n%m);
    }


    public static void main(String[] args) {

        PGS_12940 s = new PGS_12940();
        int[] answer = s.PGS_12940(3,12);
        for(int i=0; i< answer.length; i++){
            System.out.printf("%d,",answer[i]);
        }
    }
}
