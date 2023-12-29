// [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

/*
function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let s1 = arr1[i].toString(2);
    let s2 = arr2[i].toString(2);
    s1 = [...("0".repeat(n - s1.length) + s1)];
    s2 = [...("0".repeat(n - s2.length) + s2)];
    let str = "";
    for (let j = 0; j < n; j++) {
      if (s1[j] == 1 || s2[j] == 1) str += "#";
      else str += " ";
    }
    answer.push(str);
  }
  return answer;
}
*/
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
