// 푸드 파이트 대회
// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  var answer = "";
  food.map((n, idx) => (answer += `${idx}`.repeat(Math.floor(n / 2))));
  return (answer += "0".concat([...answer].reverse().join("")));
}

console.log(solution([1, 3, 4, 6]));
