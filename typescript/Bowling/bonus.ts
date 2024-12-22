export function isStrike(rolls: number[], rollIndex: number): boolean {
    return rolls[rollIndex] === 10;
}

export function isSpare(rolls: number[], pinIndex: number): boolean {
    return rolls[pinIndex] + rolls[pinIndex + 1] === 10;
}

// Helper: Calculate the strike bonus
export function strikeBonus(rolls: number[], pinIndex: number): number {
    return rolls[pinIndex + 1] + rolls[pinIndex + 2];
}

// Helper: Calculate the spare bonus
export function spareBonus(rolls: number[], pinIndex: number): number {
    return rolls[pinIndex + 2];
}

// Helper: Calculate the score for an open frame
export function frameScore(rolls: number[], pinIndex: number): number {
    return rolls[pinIndex] + rolls[pinIndex + 1];
}
