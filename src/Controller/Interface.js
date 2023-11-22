import { battleShipGame, playerBoard, computerBoard } from "./Player";

const battleShipInterface = (() => {
  const getPlayerBoard = document.querySelector(".player-board");

  const getComputerBoard = document.querySelector(".computer-board");

  const playerNameInformation = document.querySelector(".player-information");

  const resetForm = () => {
    playerNameInformation.reset();
  };

  const createPlayerAndGameboards = () => {
    const playerName = document.querySelector(".player-name-input").value;
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

  const renderPlayerBoard = () => {
    const cols = 10;
    const rows = 10;

    getPlayerBoard.textContent = "";

    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        if (playerBoard.board[i][j].name === "carrier") {
          cell.classList.add("render-ships");
        } else if (playerBoard.board[i][j].name === "battleShip") {
          cell.classList.add("render-ships");
        } else if (playerBoard.board[i][j].name === "destroyer") {
          cell.classList.add("render-ships");
        } else if (playerBoard.board[i][j].name === "subMarine") {
          cell.classList.add("render-ships");
        } else if (playerBoard.board[i][j].name === "patrolBoat") {
          cell.classList.add("render-ships");
        } else if (playerBoard.board[i][j] === "M") {
          cell.classList.add("missed-attacks");
        } else if (playerBoard.board[i][j] === "H") {
          cell.classList.add("ship-attacks");
        }
        getPlayerBoard.appendChild(cell);
      }
    }
  };

  // TODO: Figure out a way to render the filtered missed attacks
  // that are saved in separate array, while the attacks are only
  // rendered from another array !

  const renderComputerBoard = () => {
    const cols = 10;
    const rows = 10;

    getComputerBoard.textContent = "";

    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-col", i);
        cell.setAttribute("data-row", j);
        if (computerBoard.board[i][j] === "M") {
          cell.classList.add("missed-attacks");
        } else if (computerBoard.board[i][j] === "H") {
          cell.classList.add("ship-attacks");
        }
        getComputerBoard.appendChild(cell);
      }
    }
  };

  const clickEventHandler = (e) => {
    const clickedCell = e.target;
    const col = clickedCell.getAttribute("data-col");
    const row = clickedCell.getAttribute("data-row");
    if (!col && !row) return;
    battleShipGame.gameLoop(col, row);
    renderComputerBoard();
    renderPlayerBoard();
  };

  renderComputerBoard();

  getComputerBoard.addEventListener("click", clickEventHandler);

  return { renderPlayerBoard, renderComputerBoard };
})();

battleShipInterface.renderPlayerBoard();

battleShipInterface.renderComputerBoard();

export { battleShipInterface };
