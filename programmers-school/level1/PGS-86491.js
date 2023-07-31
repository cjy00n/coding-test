// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
// function solution(sizes) {
//   for (let i = 0; i < sizes.length; i++) {
//     sizes[i].sort((a, b) => b - a);
//   }
//   const max = sizes.sort((a, b) => b[0] - a[0])[0][0];
//   const smax = sizes.sort((a, b) => b[1] - a[1])[0][1];
//   return max * smax;
// }

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
