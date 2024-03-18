// reduce 사용
function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);


    return A.reduce((acc, num, idx) => num * B[idx], 0)
    return answer;
}

// for문 사용
function otherSolution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}