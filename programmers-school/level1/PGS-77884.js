// # 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884#

const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (answer -= i) : (answer += i);
  }
  return answer;
};
console.log(solution(13, 17));
