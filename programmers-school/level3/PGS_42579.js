function solution(genres, plays) {
    const music = new Map();
    const count = new Map();

    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        const p = plays[i];

        if (!music.has(g)) {
            music.set(g, [])
        }

        music.get(g).push([i, p]);
        count.set(g, (count.get(g) || 0) + p)
    }

    music.forEach((v) => v.sort(([, a], [, b]) => b - a));

    const sorted =
        [...count.entries()].sort(([, a], [, b]) => b - a).map(([c]) => c);

    return sorted.flatMap((g) => music.get(g).slice(0, 2)).map(([m]) => m);
}