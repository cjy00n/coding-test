// 옹알이(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution1(babbling) {
  var answer = 0;
  let possible = ["aya", "ye", "woo", "ma"];
  for (const b of babbling) {
    let tmp = "",
      before = "";
    for (let i = 0; i < b.length; i++) {
      tmp += b[i];
      let idx = possible.indexOf(tmp);
      if (idx != -1 && tmp != before) {
        before = tmp;
        tmp = "";
      }
    }
    if (tmp === "") answer++;
  }
  return answer;
}

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
console.log(solution(["yayae", "ayayeaya"]));
