// 덧칠하기
// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  var count = 0;
  var painted = 0;

  for (const s of section) {
    if (painted < s) {
      count++;
      painted = s + m - 1;
    }
  }

  return count;
}
/*
function solution(n, m, section) {
  var count = 0;
  let arr = new Array(n).fill(1);
  section.forEach((v) => (arr[v - 1] = 0));
  arr.forEach((v, i) => {
    if (v == 0) {
      count++;
      arr.fill(1, v, i + m);
    }
  });

  return count;
}
*/
console.log(solution(8, 4, [2, 3, 6]));
