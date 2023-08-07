// 체육복 (그리디)
// https://school.programmers.co.kr/learn/courses/30/lessons/42862
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }

  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }

  return answer;
}
/*
function solution(n, lost, reserve) {
  var answer = n - lost.length;
  lost.map((v, i) => {
    if (reserve.indexOf(v) != -1) {
      reserve.splice(reserve.indexOf(v), 1);
      lost[i] = -1;
      answer++;
    }
  });
  lost
    .sort((a, b) => a - b)
    .map((v) => {
      if (reserve.indexOf(v - 1) != -1) {
        reserve.splice(reserve.indexOf(v - 1), 1);
        answer++;
      } else if (reserve.indexOf(v + 1) != -1) {
        reserve.splice(reserve.indexOf(v + 1), 1);
        answer++;
      }
    });
  return answer;
}
*/
console.log(solution(5, [1, 2, 4, 5], [2, 3, 4]));
