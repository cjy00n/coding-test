// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;
  let sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) answer += sortedScore[i] * m;
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
