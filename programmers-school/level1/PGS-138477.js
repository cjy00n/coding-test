// 명예의 전당 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// const solution = (k, score) =>
//   score.map((v, i) =>
//     score
//       .slice(0, i + 1)
//       .sort((a, b) => b - a)
//       .slice(0, k)
//       .at(-1)
//   );

const solution = (k, score) => {
  const best = [];
  return score.reduce((a, c) => {
    if (best.length < k) {
      best.push(c);
      best.sort((a, b) => a - b);
    } else {
      best.push(c);
      best.sort((a, b) => a - b);
      best.shift();
    }
    a.push(best[0]);
    return a;
  }, []);
};

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
