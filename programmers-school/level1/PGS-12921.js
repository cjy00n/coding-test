// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921
function solution1(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((num) => num == true).length;
}

function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  } //홀수만 저장
  s.delete(1); //1 삭제
  s.add(2); // 2추가
  for (let j = 3; j < Math.sqrt(n); j += 2) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

console.log(solution(10));
