// 실패율 (2019 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var answer = [];
  var s = new Array(N).fill(0);
  stages.map((v) => {
    if (v <= N) s[v - 1]++;
  });
  let count = 0;
  s.map((v, i) => {
    answer.push([i + 1, v / (stages.length - count)]);
    count += v;
  });

  return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
