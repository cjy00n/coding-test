function solution(t) {
    // t[i][j]의 의미 => 해당 칸까지의 합의 최댓값

    for (let i = 1; i < t.length; i++) {
        t[i][0] += t[i - 1][0]; // 가장 앞줄 채우기 (루트 하나뿐)
        t[i][t[i].length - 1] += t[i - 1][t[i - 1].length - 1]; // 가장 뒷줄 채우기(루트 하나뿐)

        for (let j = 1; j < t[i].length - 1; j++) {
            t[i][j] += Math.max(t[i - 1][j - 1], t[i - 1][j]) // 가능한 경로 중 최댓값으로 변경하기
        }
    }

    return Math.max(...t[t.length - 1]); // 가장 아래쪽 값들 중 최댓값 리턴

}