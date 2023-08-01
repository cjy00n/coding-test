// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  let numEngWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;

  for (let i = 0; i < numEngWords.length; i++) {
    let arr = answer.split(numEngWords[i]);
    answer = arr.join(i);
  }
  return +answer;
}

/*
function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}
*/
/*
function solution(s) {
  let numEngWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = "";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      answer += s[i];
    } else {
      str += s[i];
      let idx = numEngWords.indexOf(str);
      if (idx != -1) {
        answer += idx;
        str = "";
      }
    }
  }
  return +answer;
}
*/
console.log(solution("one4oneseveneight"));
