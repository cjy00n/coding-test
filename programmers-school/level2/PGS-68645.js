function solution(n) {
    const dx = [1, 0, -1]; // 하 우 상
    const dy = [0, 1, -1]; // 하 우 상

    const arr = Array.from(Array(n), () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            arr[i][j] = -1;
        }
    }

    let x = 0; // 현재 x좌표
    let y = 0; // 현재 y좌표

    let i = 0; // 현재 방향 => 0:하 / 1:우 / 2:상
    let ii = 0; // 방향을 변경한 횟수 => 2회를 변경했는데 더 이상 숫자를 붙일 수 없으면 종료

    let cnt = 1; // 현재 채워야하는 숫자
    arr[0][0] = cnt; // 첫 칸은 1로 초기값

    while (true) {
        if (ii > 2) break;
        const xx = x + dx[i];
        const yy = y + dy[i];

        if (xx >= 0 && yy >= 0 && xx < n && yy < n && arr[xx][yy] == 0) {
            x = xx;
            y = yy;
            arr[x][y] = ++cnt;
            ii = 0;
        } else {
            i = (i + 1) % 3;
            ii++;
        }
    }

    const answer = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] != -1) {
                answer.push(arr[i][j]);
            }
        }
    }

    return answer
}