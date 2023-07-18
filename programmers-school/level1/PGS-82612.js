// 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  for (let i = 1; i <= count; i++) money -= price * i;
  return money < 0 ? -1 * money : 0;
}
console.log(solution(3, 20, 4, 10));
