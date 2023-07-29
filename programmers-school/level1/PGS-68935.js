// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
function solution2(n) {
  var answer = 0;
  let max = 1;
  while (true) {
    if (n < max) {
      max /= 3;
      break;
    } else if (n == max) {
      break;
    }
    max *= 3;
  }
  var three = [];
  while (max >= 1) {
    if (n >= max) {
      three.push(parseInt(n / max));
      n %= max;
    } else {
      three.push(0);
    }
    max /= 3;
  }
  three.map((n, idx) => {
    answer += n * 3 ** idx;
  });
  return answer;
}

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};

console.log(solution(45));
