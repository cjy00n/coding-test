// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution_mine(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(arr);
  }
  return answer;
}
function solution(A, B) {
  // return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
  return A.map((arr1, idx1) => {
    console.log("arr1", arr1, "idx1", idx1);
    return arr1.map((val, idx2) => {
      console.log("val", val, "idx2", idx2);
      return val + B[idx1][idx2];
    });
  });
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [1, 1],
    ],
    [
      [3, 4],
      [5, 6],
      [0, 1],
    ]
  )
);
