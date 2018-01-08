
class Game {


    constructor() {
        this._rolls = [];
    }

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        let score = 0;
        let currentRoll = 0;
        for (let frame = 0; frame < 10; frame++) {
            score += (this._rolls[currentRoll] || 0) + (this._rolls[currentRoll + 1] || 0);

            if (this._rolls[currentRoll] + this._rolls[currentRoll + 1] === 10) {
                score += this._rolls[currentRoll + 2] || 0
            }

            if (this._rolls[currentRoll] === 10) {
                score += (this._rolls[currentRoll + 1] || 0) + (this._rolls[currentRoll + 2] || 0)
            }

            currentRoll += 2;
        }
        return score;
    }
}
module.exports = Game;