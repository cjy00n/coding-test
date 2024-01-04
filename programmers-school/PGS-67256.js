// 2020 카카오 인턴십 > 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let answer = "";
  hand = hand === "right" ? "R" : "L";

  const key = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let left = "*";
  let right = "#";

  const setHand = (num, hand) => {
    if (hand === "R") {
      right = num;
      answer += "R";
    } else if (hand === "L") {
      left = num;
      answer += "L";
    }
  };
  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      setHand(num, "L");
    } else if (num === 3 || num === 6 || num === 9) {
      setHand(num, "R");
    } else {
      const pos = key[num];
      const leftPos = key[left];
      const rightPos = key[right];
      const disL =
        Math.abs(leftPos[0] - pos[0]) + Math.abs(leftPos[1] - pos[1]);
      const disR =
        Math.abs(rightPos[0] - pos[0]) + Math.abs(rightPos[1] - pos[1]);

      if (disL > disR || (disL === disR && hand === "R")) setHand(num, "R");
      else if (disL < disR || (disL === disR && hand === "L"))
        setHand(num, "L");
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
