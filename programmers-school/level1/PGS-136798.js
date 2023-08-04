// 기사단원의 무기
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  var count = 0;
  for (let i = 1; i <= number; i++) {
    let dc = divisorCount(i);
    dc > limit ? (count += power) : (count += dc);
  }
  return count;
}

const divisorCount = (num) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) count += 2;
    if (i == Math.sqrt(num)) count--;
  }
  return count;
};
console.log(solution(5, 3, 2));
