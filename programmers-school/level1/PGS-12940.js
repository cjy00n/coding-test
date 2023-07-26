// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution1(n, m) {
  const num = [n, m].sort();
  var answer = [1, 1];

  if (num[0] % num[1] == 0) {
    answer[0] = num[1];
  } else {
    for (let i = 2; i <= num[1] / 2; i++) {
      if (num[0] % i == 0 && num[1] % i == 0) answer[0] = i;
    }
  }
  answer[1] = answer[0] == 1 ? n * m : (n / answer[0]) * m;

  return answer;
}

// console.log(solution(4, 15));

function solution(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;

  return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}

console.log(solution(16, 12));
