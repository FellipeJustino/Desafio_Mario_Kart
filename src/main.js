import { Player } from './classes/Player.js';
import { playRaceEngine, declareWinner } from './classes/Race.js';

async function characterMenu() {
    console.log("---------------------- \n");
    console.log("1- Mario               \n");
    console.log("2- Luigi               \n");
    console.log("3- Bowser              \n");
    console.log("4- Peach               \n");
    console.log("5- Yoshi               \n");
    console.log("6- Donkey Kong         \n");
    console.log("---------------------- \n");
}

const player1 = new Player(3);  
const player2 = new Player(4);  

(async function main() {

    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
    
    await playRaceEngine(player1, player2);

    await declareWinner(player1, player2);
})();
