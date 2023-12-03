import {
  battleShipGame,
  playerBoard,
  computerBoard,
  carrier,
  carrierAI,
  battleShip,
  battleShipAI,
  destroyer,
  destroyerAI,
  subMarine,
  subMarineAI,
  patrolBoat,
  patrolBoatAI,
} from "../Controller/Player";

const battleShipInterface = (() => {
  const getPlayerBoard = document.querySelector(".player-board");

  const getComputerBoard = document.querySelector(".computer-board");

  const playerNameInformation = document.querySelector(".player-information");

  const mainDialog = document.querySelector(".dialog");

  const displayWinner = document.querySelector(".display-winner");

  const showWinnerDialog = document.querySelector(".winner-dialog");

  const playAgainButton = document.querySelector(".play-again");

  const playerCarrierStatus = document.querySelector(".player-carrier-status");

  const playerBattleshipStatus = document.querySelector(
    ".player-battleship-status"
  );

  const playerDestroyerStatus = document.querySelector(
    ".player-destroyer-status"
  );

  const playerSubmarineStatus = document.querySelector(
    ".player-submarine-status"
  );

  const playerPatrolBoatStatus = document.querySelector(
    ".player-patrolboat-status"
  );

  const computerCarrierStatus = document.querySelector(
    ".computer-carrier-status"
  );

  const computerBattleshipStatus = document.querySelector(
    ".computer-battleship-status"
  );

  const computerDestroyerStatus = document.querySelector(
    ".computer-destroyer-status"
  );

  const computerSubmarineStatus = document.querySelector(
    ".computer-submarine-status"
  );

  const computerPatrolBoatStatus = document.querySelector(
    ".computer-patrolboat-status"
  );

  // show the dialog
  mainDialog.setAttribute("open", true);

  // prevent from clicking on the boards, when the player is not even created
  getPlayerBoard.style.pointerEvents = "none";
  getComputerBoard.style.pointerEvents = "none";

  const resetForm = () => {
    playerNameInformation.reset();
  };

  const createPlayer = () => {
    const playerName = document.querySelector(".player-name-input").value;
    battleShipGame.setPlayer(playerName);
    battleShipGame.setFirstPlayer();
  };

  playerNameInformation.addEventListener("submit", (e) => {
    // e.preventDefault();
    createPlayer();
    battleShipGame.getPlayer();
    // allow to click on the board after the player object is created
    getPlayerBoard.style.pointerEvents = "auto";
    getComputerBoard.style.pointerEvents = "auto";
    resetForm();
  });

  // TODO: Figure out a better way of rendering the ships/attacks/misses

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

  const declarePlayerWinner = () => {
    if (playerBoard.checkForWin(computerBoard)) {
      displayWinner.textContent = `${battleShipGame.getPlayer()} won!`;
      showWinnerDialog.setAttribute("open", true);
      getPlayerBoard.style.pointerEvents = "none";
      getComputerBoard.style.pointerEvents = "none";
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

  const declareComputerWinner = () => {
    if (computerBoard.checkForWin(playerBoard)) {
      displayWinner.textContent = `${battleShipGame.getComputer().name} won!`;
      showWinnerDialog.setAttribute("open", true);
      getPlayerBoard.style.pointerEvents = "none";
      getComputerBoard.style.pointerEvents = "none";
    }
  };

  const handleShipsPlacedProperty = () => {
    if (carrier.isPlaced) {
      playerCarrierStatus.textContent = "Placed";
      playerCarrierStatus.style.color = "green";
    }

    if (carrierAI.isPlaced) {
      computerCarrierStatus.textContent = "Placed";
      computerCarrierStatus.style.color = "green";
    }

    if (battleShip.isPlaced) {
      playerBattleshipStatus.textContent = "Placed";
      playerBattleshipStatus.style.color = "green";
    }

    if (battleShipAI.isPlaced) {
      computerBattleshipStatus.textContent = "Placed";
      computerBattleshipStatus.style.color = "green";
    }

    if (destroyer.isPlaced) {
      playerDestroyerStatus.textContent = "Placed";
      playerDestroyerStatus.style.color = "green";
    }

    if (destroyerAI.isPlaced) {
      computerDestroyerStatus.textContent = "Placed";
      computerDestroyerStatus.style.color = "green";
    }

    if (subMarine.isPlaced) {
      playerSubmarineStatus.textContent = "Placed";
      playerSubmarineStatus.style.color = "green";
    }

    if (subMarineAI.isPlaced) {
      computerSubmarineStatus.textContent = "Placed";
      computerSubmarineStatus.style.color = "green";
    }

    if (patrolBoat.isPlaced) {
      playerPatrolBoatStatus.textContent = "Placed";
      playerPatrolBoatStatus.style.color = "green";
    }

    if (patrolBoatAI.isPlaced) {
      computerPatrolBoatStatus.textContent = "Placed";
      computerPatrolBoatStatus.style.color = "green";
    }
  };

  const handleShipsSunkProperty = () => {
    if (carrier.isSunk()) {
      playerCarrierStatus.textContent = "Sunk";
      playerCarrierStatus.style.color = "red";
    }

    if (carrierAI.isSunk()) {
      computerCarrierStatus.textContent = "Sunk";
      computerCarrierStatus.style.color = "red";
    }

    if (battleShip.isSunk()) {
      playerBattleshipStatus.textContent = "Sunk";
      playerBattleshipStatus.style.color = "red";
    }

    if (battleShipAI.isSunk()) {
      computerBattleshipStatus.textContent = "Sunk";
      computerBattleshipStatus.style.color = "red";
    }

    if (destroyer.isSunk()) {
      playerDestroyerStatus.textContent = "Sunk";
      playerDestroyerStatus.style.color = "red";
    }

    if (destroyerAI.isSunk()) {
      computerDestroyerStatus.textContent = "Sunk";
      computerDestroyerStatus.style.color = "red";
    }

    if (subMarine.isSunk()) {
      playerSubmarineStatus.textContent = "Sunk";
      playerSubmarineStatus.style.color = "red";
    }

    if (subMarineAI.isSunk()) {
      computerSubmarineStatus.textContent = "Sunk";
      computerSubmarineStatus.style.color = "red";
    }

    if (patrolBoat.isSunk()) {
      playerPatrolBoatStatus.textContent = "Sunk";
      playerPatrolBoatStatus.style.color = "red";
    }

    if (patrolBoatAI.isSunk()) {
      computerPatrolBoatStatus.textContent = "Sunk";
      computerPatrolBoatStatus.style.color = "red";
    }
  };

  const clickEventHandler = (e) => {
    const clickedCell = e.target;
    const col = clickedCell.getAttribute("data-col");
    const row = clickedCell.getAttribute("data-row");
    if (!col && !row) return;
    battleShipGame.gameLoop(col, row);
    handleShipsSunkProperty();
    renderComputerBoard();
    declarePlayerWinner();
    renderPlayerBoard();
    declareComputerWinner();
  };

  renderComputerBoard();

  getComputerBoard.addEventListener("click", clickEventHandler);

  const restartGame = () => {
    playerBoard.clearBoard();

    computerBoard.clearBoard();

    playerBoard.clearSaveShipsArray();

    computerBoard.clearSaveShipsArray();

    carrier.resetNumberOfHits();

    carrierAI.resetNumberOfHits();

    battleShip.resetNumberOfHits();

    battleShipAI.resetNumberOfHits();

    destroyer.resetNumberOfHits();

    destroyerAI.resetNumberOfHits();

    subMarine.resetNumberOfHits();

    subMarineAI.resetNumberOfHits();

    patrolBoat.resetNumberOfHits();

    patrolBoatAI.resetNumberOfHits();

    carrier.isPlaced = false;

    carrierAI.isPlaced = false;

    battleShip.isPlaced = false;

    battleShipAI.isPlaced = false;

    destroyer.isPlaced = false;

    destroyerAI.isPlaced = false;

    subMarine.isPlaced = false;

    subMarineAI.isPlaced = false;

    patrolBoat.isPlaced = false;

    patrolBoatAI.isPlaced = false;

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.remove(".cell");
    });

    battleShipGame.placeAllShipsRandomly();

    handleShipsPlacedProperty();

    renderPlayerBoard();

    renderComputerBoard();

    showWinnerDialog.removeAttribute("open");
    // show the dialog again on new game
    mainDialog.setAttribute("open", true);
  };

  playAgainButton.addEventListener("click", restartGame);

  return { renderPlayerBoard, renderComputerBoard, handleShipsPlacedProperty };
})();

export { battleShipInterface };
