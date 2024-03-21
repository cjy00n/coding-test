function solution(clothes) {
    let answer = 1;
    const closet = new Map();

    for (const [, type] of clothes) {
        closet.set(type, closet.has(type) ? closet.get(type) + 1 : 1);
    }

    for (const [, v] of closet) {
        answer *= (v + 1); // 해당 유형을 1개 선택하는 경우의 수 + 0개 선택하는 경우의 수
    }

    return answer - 1; // 아무것도 선택하지 않았을 경우인 1을 빼줌
}