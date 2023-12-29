// 대충 만든 자판
// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }

  console.log(map);
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}

/* 나의 풀이 
function solution(keymap, targets) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const max = 101;

  const arr = chars.map((char) => {
    let tmp = max; // 최솟값 비교할
    keymap.forEach((key) => {
      for (let i = 1; i <= key.split("").length; i++) {
        if (key[i - 1] === char && tmp > i) {
          tmp = i;
          i = key.split("").length;
        }
      }
    });
    return tmp === max ? 0 : tmp;
  });

  return targets.map((target) => {
    let sum = 0;
    let stop = false;
    target.split("").forEach((t) => {
      if (!stop) {
        if (arr[chars.indexOf(t)] === 0) {
          stop = true;
        } else {
          sum += arr[chars.indexOf(t)];
        }
      }
    });
    return stop ? -1 : sum;
  });
}
*/

console.log(solution(["BABCCCTRC"], ["AA", "XA", "XX", "CCCCCX"]));
