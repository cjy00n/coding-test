// 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

/* 나의 풀이 
function solution(board, moves) {
  var answer = 0;
  let basket = [];

  moves.forEach((move) => {
    if (board[board.length - 1][move - 1])
      for (let i = 0; i <= board.length; i++) {
        if (board[i][move - 1]) {
          if (
            basket.length > 0 &&
            basket[basket.length - 1] === board[i][move - 1]
          ) {
            basket.pop();
            answer += 2;
          } else {
            basket.push(board[i][move - 1]);
          }
          board[i][move - 1] = 0;
          break;
        }
      }
  });
  return answer;
}
*/

/* 다른 사람의 풀이 */
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );
/* 
위 transpose 함수에 matrix가 [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ]으로 주어질 경우, 
    결과 값은 
    [
      [0, 0, 0, 4, 3],
      [0, 0, 2, 2, 5],
      [0, 1, 5, 4, 1],
      [0, 0, 0, 4, 3],
      [0, 3, 1, 2, 1],
    ]이다. 
*/
const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );

  /*
    위 코드 실행 후 stacks의 결괏값은
    [
      [3, 4],
      [5, 2, 2],
      [1, 4, 5, 1],
      [3, 4],
      [1, 2, 1, 3],
    ] 이다.
  */
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

console.log(
  solution(
    [
      [0, 0, 0, 4, 3],
      [0, 0, 2, 2, 5],
      [0, 1, 5, 4, 1],
      [0, 0, 0, 4, 3],
      [0, 3, 1, 2, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
