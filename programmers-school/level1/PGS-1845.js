// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const num = nums.length / 2;
  nums = [...new Set(nums)];
  return num >= nums.length ? nums.length : num;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
