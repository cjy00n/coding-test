// 카드 뭉치
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) cards1.shift();
    else if (cards2[0] == s) cards2.shift();
    else return "No";
  }
  return "Yes";
}

// function solution(cards1, cards2, goal) {
//   var answer = "Yes";
//   for (let i = 0; i < goal.length; i++) {
//     let a = cards1.indexOf(goal[i]);
//     let b = cards2.indexOf(goal[i]);
//     if (a != 0 && b != 0) {
//       answer = "No";
//       break;
//     } else if (a == 0) cards1.shift();
//     else if (b == 0) cards2.shift();
//   }
//   return answer;
// }
console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
