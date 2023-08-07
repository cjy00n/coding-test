// 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  let obj = new Object();
  for (const p of participant) {
    obj[p] === undefined ? (obj[p] = 1) : obj[p]++;
  }
  for (const c of completion) {
    obj[c] == 1 ? delete obj[c] : obj[c]--;
  }
  return Object.keys(obj).join("");
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
