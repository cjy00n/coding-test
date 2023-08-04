// 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let zero = 0;
  let correct = 0;
  for (const num of lottos) {
    if (num == 0) zero++;
    else if (win_nums.indexOf(num) != -1) correct++;
  }
  return [rank[correct + zero], rank[correct]];
}
console.log(solution([1, 2, 3, 4, 5, 6], [31, 10, 45, 11, 16, 19]));
