import { battleShipGame } from "./Player";

const battleShipInterface = (() => {
  const playerBoard = document.querySelector(".player-board");

  const computerBoard = document.querySelector(".computer-board");

  const playerNameInformation = document.querySelector(".player-information");

  const resetForm = () => {
    playerNameInformation.reset();
  };

  const createPlayerAndGameboards = () => {
    const playerName = document.querySelector(".player-name-input");
    battleShipGame.setPlayer(playerName);
    battleShipGame.setFirstPlayer();
    // create gameboard objects
  };

  playerNameInformation.addEventListener("submit", (e) => {
    // e.preventDefault();
    createPlayerAndGameboards();
    console.log(battleShipGame.getPlayer());
    resetForm();
  });

  const createPlayerBoard = () => {
    const cols = 10;
    const rows = 10;

    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        // render ships

        playerBoard.appendChild(cell);
      }
    }
  };

  const createComputerBoard = () => {
    const cols = 10;
    const rows = 10;

    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        // render ships

        computerBoard.appendChild(cell);
      }
    }
  };

  return { createPlayerBoard, createComputerBoard };
})();

battleShipInterface.createPlayerBoard();

battleShipInterface.createComputerBoard();

export { battleShipInterface };
