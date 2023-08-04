// [1차] 다트게임 (2018 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { "*": 2, "#": -1, undefined: 1 };
  let darts = dartResult.match(/\d\d?.?\D/g);
  let scores = [];
  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
    scores[i] = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    if (split[3] === "*" && scores[i - 1]) scores[i - 1] *= options["*"];
  }
  return scores[0] + scores[1] + scores[2];
}
// function solution(result) {
//   var answer = 0;
//   var pos = 0;
//   var result = result.split("");
//   var scores = [];
//   result.map((v, i) => {
//     if (v == "S" || v == "D" || v == "T") {
//       let score = +result.slice(pos, i).join("");
//       if (v == "D") score **= 2;
//       else if (v == "T") score **= 3;
//       if (result[i + 1]) {
//         if (result[i + 1] == "*") {
//           score *= 2;
//           if (scores.length > 0) scores[scores.length - 1] *= 2;
//           pos = i + 2;
//         } else if (result[i + 1] == "#") {
//           score *= -1;
//           pos = i + 2;
//         } else pos = i + 1;
//       }
//       scores.push(score);
//     }
//   });
//   return scores[0] + scores[1] + scores[2];
// }

console.log(solution("10D2S10T*"));
