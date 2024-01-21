// 성격 유형 검사하기(2022 KAKAO TECH INTERNSHIP)
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, idx) => {
    const [disagree, agree] = survey[idx];
    MBTI[choice < 4 ? disagree : agree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[a] >= MBTI[b] ? a : b)).join("");
}

function mySolution(survey, choices) {
  const MBTI = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const types = ["RT", "CF", "JM", "AN"];

  choices.forEach((choice, idx) => {
    const [disagree, agree] = survey[idx];

    MBTI[choice < 4 ? disagree : agree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[a] >= MBTI[b] ? a : b)).join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
