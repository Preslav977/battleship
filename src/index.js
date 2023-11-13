import { Player } from "./Controller/Player";

const player = Player("Player");

console.log(player.gameLoop(1, 0));

console.log(player.gameLoop(5, 0));
