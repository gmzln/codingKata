import { isSpare, isStrike, strikeBonus, spareBonus, frameScore } from "./Bonus"; 


export class Game {
    private totalPins: number[] = [];
    private currentRoll: number = 0;

	roll(pins: number): void {
        this.totalPins[this.currentRoll++] = pins
    };

	score(): number {
        let gameScore = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (isStrike(this.totalPins, rollIndex)) {
                // Strike: 10 + next two rolls
                gameScore += 10 + strikeBonus(this.totalPins, rollIndex);
                rollIndex += 1; // Move to the next frame
            } else if (isSpare(this.totalPins, rollIndex)) {
                // Spare: 10 + next roll
                gameScore += 10 + spareBonus(this.totalPins, rollIndex);
                rollIndex += 2; // Move to the next frame
            } else {
                // Open Frame: Sum of two rolls
                gameScore += frameScore(this.totalPins, rollIndex);
                rollIndex += 2; // Move to the next frame
            }
        }

        return gameScore;
    }
    
	isOver(): boolean {
        return this.score() >= 133;
    }
    
}