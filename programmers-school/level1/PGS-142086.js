// 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const hash = {};
  return [...s].map((c, i) => {
    let result = hash[c] !== undefined ? i - hash[c] : -1;
    hash[c] = i;
    return result;
  });
}

console.log(solution("foobafo"));
