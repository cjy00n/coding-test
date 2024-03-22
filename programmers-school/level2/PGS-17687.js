function solution(n, t, m, p) {
    let result = "";
    const size = t * m + p - 1;

    for (let i = 0; result.length <= size; i++) {
        result += i.toString(n).toUpperCase();
    }

    let answer = "";
    for (let i = p - 1, j = 0; j < t; i += m, j++) {
        answer += result[i]
    }

    return answer;
}