// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  var answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let s1 = answers.filter((a, i) => a == a1[i % a1.length]).length;
  let s2 = answers.filter((a, i) => a == a2[i % a2.length]).length;
  let s3 = answers.filter((a, i) => a == a3[i % a3.length]).length;

  let max = Math.max(s1, s2, s3);
  if (s1 == max) answer.push(1);
  if (s2 == max) answer.push(2);
  if (s3 == max) answer.push(3);

  return answer;
}

// function solution(answers) {
//   let score = [0, 0, 0];
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] == (i % 5) + 1) score[0]++;
//     if (answers[i] == [2, 1, 2, 3, 2, 4, 2, 5][i % 8]) score[1]++;
//     if (answers[i] == [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][i % 10]) score[2]++;
//   }

//   return score.reduce((a, v, i) => {
//     if (v == Math.max(...score)) a.push(i + 1);
//     return a;
//   }, []);
// }

console.log(solution([1, 2, 3, 4, 5]));
