const Game = require('../src/game')


const testCases = [
    { rolls: [], expectedScore: 0 }
    , { rolls: [1], expectedScore: 1 }
    , { rolls: [1, 1], expectedScore: 2 }
    , { rolls: [5, 5, 1], expectedScore: 12 }
    , { rolls: [1, 5, 5, 1], expectedScore: 12 }
    , { rolls: [5, 5, 1, 2], expectedScore: 14 }
    , { rolls: [10, 1, 2], expectedScore: 16 }
]

function rollMany(game, rolls) {
    rolls.forEach(pins => game.roll(pins));
}

testCases.forEach(testCase => {

    test(JSON.stringify(testCase), () => {
        const game = new Game();
        rollMany(game, testCase.rolls);
        expect(game.score()).toBe(testCase.expectedScore);
    });
})


// test("All ones", () => {
//     const game = new Game();
//     const allOnes = Array.apply(null, { length: 20 }).map(() => 1);
//     rollMany(game, allOnes);

//     expect(game.score()).toBe(20);
// })

// test("Perfect game", () => {
//     const game = new Game();
//     const allOnes = Array.apply(null, { length: 12 })
//         .map(() => 10);
//     rollMany(game, allOnes);

//     expect(game.score()).toBe(300);
// })
