import { Player } from "./Player";

async function rollDice() {
    let random = Math.random() * 6 + 1;
    return Math.floor(random);
}

async function logRollResult(characterName, block, diceResult, attributeName) {
    const attributeValue = characterName[attributeName];
    const total = diceResult + attributeValue;
    console.log(
        `${characterName.NOME} 🎲 rolou um dado de ${block} ${diceResult} + ${attributeValue} = ${diceResult + attributeValue}`
    );
}

