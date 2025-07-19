import { getRandomBlock, rollDice, logRollResult } from './Block.js';

async function powerDecrease(character) {
    if (character.PONTOS > 0) {
        character.PONTOS--;
    }
}

async function roundWinner(character1, character2, totalTestSkill01, totalTestSkill02) {
    if (totalTestSkill01 > totalTestSkill02) {
        console.log(`${character1.NOME} marcou um ponto!`);
        console.log("---------------------- \n");
        character1.PONTOS++;
    } else if (totalTestSkill02 > totalTestSkill01) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
        console.log("---------------------- \n");
    } else {
        console.log(`Houve um empate entre ${character1.NOME} e ${character2.NOME}!`);
        console.log("---------------------- \n");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS) 
        console.log(`🏆 ${character1.NOME} venceu a corrida!`);
    else if (character2.PONTOS > character1.PONTOS) 
        console.log(`🏆 ${character2.NOME} venceu a corrida!`);
    else 
        console.log("⚖️ A corrida terminou em empate!");
    
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}:`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult01 = await rollDice();
        let diceResult02 = await rollDice();

        let totalTestSkill01 = 0;
        let totalTestSkill02 = 0;

        switch (block) {
            case "RETA":
                totalTestSkill01 = diceResult01 + character1.VELOCIDADE;
                totalTestSkill02 = diceResult02 + character2.VELOCIDADE;
                await logRollResult(character1, block, diceResult01, "VELOCIDADE");
                await logRollResult(character2, block, diceResult02, "VELOCIDADE");
                await roundWinner(character1, character2, totalTestSkill01, totalTestSkill02);  
                break;

            case "CURVA":
                totalTestSkill01 = diceResult01 + character1.MANOBRABILIDADE;
                totalTestSkill02 = diceResult02 + character2.MANOBRABILIDADE;
                await logRollResult(character1, block, diceResult01, "MANOBRABILIDADE");
                await logRollResult(character2, block, diceResult02, "MANOBRABILIDADE");
                await roundWinner(character1, character2, totalTestSkill01, totalTestSkill02);  
                break;

            case "CONFRONTO":
                let powerResult01 = diceResult01 + character1.PODER;
                let powerResult02 = diceResult02 + character2.PODER;

                console.log(`${character1.NOME} confrontou com ${character2.NOME}!`);
                await logRollResult(character1, block, diceResult01, "PODER");
                await logRollResult(character2, block, diceResult02, "PODER");

                if (powerResult01 > powerResult02) {
                    console.log(`${character1.NOME} venceu o confronto! 💪 ${character2.NOME} perdeu 1 ponto.`);
                    console.log("---------------------- \n");
                    await powerDecrease(character2);
                } else if (powerResult02 > powerResult01) {
                    console.log(`${character2.NOME} venceu o confronto! 💪 ${character1.NOME} perdeu 1 ponto.`);
                    console.log("---------------------- \n");
                    await powerDecrease(character1);
                } else {
                    console.log("Empate no confronto! Não há alteração nos pontos.");
                }
                break;
        }
    }
}

export { playRaceEngine, declareWinner };
