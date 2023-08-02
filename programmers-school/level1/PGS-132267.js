// 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    let d = parseInt(n / a); // 찬스 수
    answer += d * b; // 찬스로 받는 병 수
    n = n - a * d + d * b; // 현재 가지고 있는 병 수
  }
  return answer;
}

console.log(solution(4, 2, 20));
