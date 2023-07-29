// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  console.log(d);
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) return i;
    else if (budget == 0) return i + 1;
  }
  return d.length;
}

console.log(solution([2, 12, 11, 1], 50));
