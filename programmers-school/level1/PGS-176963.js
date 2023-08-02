// 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  return photo.map((arr) =>
    arr.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
