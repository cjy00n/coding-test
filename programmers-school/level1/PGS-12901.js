// 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let d = b - 1 + days.indexOf("FRI");
  for (let i = 0; i < a - 1; i++) {
    d += daysOfMonth[i];
  }
  return days[d % 7];
}

console.log(solution(5, 24));
