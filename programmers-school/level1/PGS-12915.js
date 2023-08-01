// 문자열 내 마음대로 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  // let lower = "abcdefghijklmnopqrstuvwxyz";
  // strings.sort();
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}

console.log(solution(["sun", "bed", "car"], 1));
