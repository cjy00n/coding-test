// 문자열 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      count++;
      current = s[i];
    } else {
      current === s[i] ? count++ : count--;
    }
  }

  return answer;
}
/*
function solution(s) {
  let answer = 1;
  let pos = 0;
  while (pos < s.length - 1) {
    let count = 0;
    for (let i = pos; i < s.length; i++) {
      s[i] === s[pos] ? count++ : count--;
      if (count == 0 || i == s.length - 1) {
        pos = i + 1;
        break;
      }
    }
    if (pos < s.length) answer++;
  }
  return answer;
}
*/
console.log(solution("banana"));
console.log(solution("aaabb"));
