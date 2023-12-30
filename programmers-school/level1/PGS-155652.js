// 둘만의 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  /* 나의풀이 
  const set = new Set("abcdefghijklmnopqrstuvwxyz".split(""));
  skip.split("").forEach((item) => set.delete(item));
  return s
    .split("")
    .map((item) => [...set][([...set].indexOf(item) + index) % set.size])
    .join("");
*/

  const arr = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((item) => !skip.includes(item));

  return s
    .split("")
    .map((item) => arr[(arr.indexOf(item) + index) % arr.length])
    .join("");
}

console.log(solution("aukks", "wbqd", 5));
