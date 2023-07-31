// 시저 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let answer = "";
  s.split("").forEach((c) => {
    if (c >= "A" && c <= "Z")
      answer += upper[(upper.indexOf(c) + n) % upper.length];
    else if (c >= "a" && c <= "z")
      answer += lower[(lower.indexOf(c) + n) % lower.length];
    else answer += c;
  });
  return answer;
}

console.log(solution("C Bfdsad", 5));
