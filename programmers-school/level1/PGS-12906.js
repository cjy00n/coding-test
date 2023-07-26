//같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution1(arr) {
  let answer = [arr[0]];

  arr.forEach((num) => {
    if (num != answer[answer.length - 1]) answer.push(num);
  });
  return answer;
}

const solution = (arr) => {
  return arr.filter((val, idx) => val != arr[idx + 1]);
};
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
