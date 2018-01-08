
function _n(n) { return n || 0 }

class Game {
    constructor() {
        this._rolls = [];
    }

    roll(pins) {
        this._rolls.push(pins);
    }

    getFrameScore(rollIndex) {
        return _n(this._rolls[rollIndex]) + _n(this._rolls[rollIndex + 1]);
    }

    isStrike(rollIndex) {
        return this._rolls[rollIndex] == 10
    }

    score() {
        let score = 0;
        let currentRollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(currentRollIndex)) { // strike
                score += 10 + this.getFrameScore(currentRollIndex + 1);
                currentRollIndex += 1;
            }
            else if (this.getFrameScore(currentRollIndex) == 10) { // spare
                score += 10 + _n(this._rolls[currentRollIndex + 2]);
                currentRollIndex += 2;
            }
            else { // normal
                score += this.getFrameScore(currentRollIndex);
                currentRollIndex += 2;
            }
        }

        return score;
    }

    // rolls -> score -> int
}
module.exports = Game;