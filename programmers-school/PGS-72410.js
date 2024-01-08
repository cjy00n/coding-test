// 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천
// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

/* 나의 풀이 
function solution(new_id) {
  const allow = ".-_0123456789abcdefghijklmnopqrstuvwxyz".split("");

  let temp = new_id
    .toLowerCase()
    .split("")
    .map((char) => (allow.includes(char) ? char : "")); // 1단계 & 2단계

  let isDot = false;
  temp = temp
    .join("")
    .split("")
    .map((char) => {
      if (char === "." && !isDot) {
        isDot = true;
        return ".";
      } else if (char === "." && isDot) {
        return "";
      } else if (char !== ".") {
        isDot = false;
        return char;
      }
    }); // 3단계

  answer = temp.join("");

  if (answer[0] === ".") answer = answer.slice(1); // 4단계
  if (answer[answer.length - 1] === ".") answer = answer.slice(0, -1); // 4단계

  if (answer.length === 0) answer = "a"; // 5단계
  if (answer.length > 15) answer = answer.slice(0, 15); // 6단계
  if (answer[answer.length - 1] === ".") answer = answer.slice(0, -1); // 6단계

  if (answer.length <= 2)
    return answer + answer[answer.length - 1].repeat(3 - answer.length); // 7단계
  return answer;
}

*/

console.log(solution("...!@BaT#*..y.abcdefghijklm"));