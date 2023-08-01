// 크기가 작은 부분 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function solution(t, p) {
  var cnt = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (+t.slice(i, i + p.length) <= +p) cnt++;
  }
  return cnt;
}

console.log(solution("3141592", "271"));
