import { Game } from "./Game";

class App{

    static main(): void {
    const game = new Game();

    const pins = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 10, 2, 6];
    for (const pin of pins) {
        if (game.isOver()) {
            console.log(`Game is Over. You reached ${pins} Points`);
            return
        }
        game.roll(pin);
    }
    
    console.log("Final Score:", game.score());
    console.log("Is Game Over?:", game.isOver());
}
}

App.main();