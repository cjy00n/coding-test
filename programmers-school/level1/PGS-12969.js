// 직사각형 별 찍기
// https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  str = "*".repeat(a);
  for (let i = 1; i <= b; i++) {
    console.log(str);
  }
});
