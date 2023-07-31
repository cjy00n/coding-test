// 삼총사
// https://school.programmers.co.kr/learn/courses/30/lessons/131705?language=javascript

function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] == 0) answer++;
      }
    }
  }
  return answer;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
