async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }

    return result;
}

async function rollDice() {
    let random = Math.random() * 6 + 1;
    return Math.floor(random); 
}

async function logRollResult(characterName, block, diceResult, attributeName) {
    const attributeValue = characterName[attributeName];
    const total = diceResult + attributeValue;
    console.log(
        `${characterName.NOME} 🎲 rolou um dado no bloco ${block}: ${diceResult} + ${attributeValue} = ${total}`
    );
}

export { getRandomBlock, rollDice, logRollResult };
