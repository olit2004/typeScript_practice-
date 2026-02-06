import { HANGMANPICS } from "./pics.js";
export function renderGame(wordDisplay, guessedLetters, livesLeft, category = "") {
    const hangmanDrawing = HANGMANPICS[6 - livesLeft].split("\n");
    const rightInfo = [
        `Word: ${wordDisplay}`,
        `category:${category ? category : "general"}`,
        `Lives left: ${livesLeft}`,
        `Guessed letters: ${guessedLetters.join(", ")}`,
    ];
    const maxHangmanWidth = 25;
    const output = [];
    const maxLines = Math.max(hangmanDrawing.length, rightInfo.length);
    console.log("\n");
    console.log("\n");
    console.log("\n");
    for (let i = 0; i < maxLines; i++) {
        const leftLine = hangmanDrawing[i] ?? "";
        const paddedLeft = leftLine.padEnd(maxHangmanWidth, " ");
        const rightLine = rightInfo[i] ?? "";
        output.push(paddedLeft + rightLine);
    }
    console.log(output.join("\n"));
}
//# sourceMappingURL=gameRender.js.map