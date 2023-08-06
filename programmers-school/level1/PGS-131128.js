// 숫자 짝꿍
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const xObj = {},
    yObj = {};

  X.split("").forEach((x) => {
    if (xObj[x] === undefined) xObj[x] = 1;
    else xObj[x]++;
  });

  Y.split("").forEach((y) => {
    if (yObj[y] === undefined) yObj[y] = 1;
    else yObj[y]++;
  });

  const concatObj = {};
  Object.entries(xObj).forEach(([key, value]) => {
    if (yObj[key] !== undefined) concatObj[key] = Math.min(value, yObj[key]);
  });

  let concatStr = "";
  Object.entries(concatObj).forEach(([key, value]) => {
    concatStr = concatStr.concat(key.repeat(value));
  });

  let concatArr = concatStr.split("").sort((a, b) => b - a);
  if (concatArr.length === 0) return "-1";
  else if (concatArr[0] === "0") return "0";
  else return concatArr.join("");
}

console.log(solution("100", "203045"));
