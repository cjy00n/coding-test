function solution(s) {
    const arr = s.split(" ")
    return arr.map((str) => {
        if (str.length > 0) {
            return str[0].toUpperCase() + str.slice(1, str.length).split("").map((item) => item.toLowerCase()).join("")
        } else return str;
    }).join(" ")
}

function otherSolution(s) {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] === " ") {
            // 첫 문자이거나, 이전 문자가 공백일 경우
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
    }

    return answer;
}
