export function recitePoems (parts: string[]): string {
    const verses: string [] = [];
        parts.forEach((_, index) => {
            const verse = `This is ${[...parts.slice(0, index + 1)].reverse().join('\n')}.`;
            verses.push(verse);
        })
        return verses.join('\n\n').toString();
}

export function echoParts(parts: string[]): string[] {
    return parts.map((part) => `${part}\n${part}`);
}

export function randomParts (parts: string[]): string[] {
    const shuffledArray = parts.sort(() => 0.5 - Math.random());
    return shuffledArray;
}