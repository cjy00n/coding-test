function solution(expression) {
    const prior = ["+-*", "+*-", "-+*", "-*+", "*-+", "*+-"];

    let max = -Infinity;

    for (const exp of prior) {
        const arr = expression.split(/(\D)/);
        for (const op of exp) {
            while (arr.includes(op)) {
                const idx = arr.indexOf(op);
                arr.splice(idx - 1, 3, cal(op, arr[idx - 1], arr[idx + 1]))
            }
        }
        max = Math.max(max, Math.abs(arr[0]));

    }

    function cal(op, num1, num2) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (op === '+') return num1 + num2;
        else if (op === "*") return num1 * num2;
        else if (op === "-") return num1 - num2;
    }

    return max;
}