// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  // 정규표현식 사용 풀이
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });

  // split&join 사용 풀이
  var answer = "";
  let idx = 0;
  return s
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((c, idx) => (idx % 2 == 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");

  // 처음 나의 풀이
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      idx = 0;
    } else {
      if (idx % 2 == 0) {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
      idx++;
    }
  }
}

console.log(solution("  try hello world blabladdddddd r f d   "));
