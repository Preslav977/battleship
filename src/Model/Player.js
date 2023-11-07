const Player = (name) => {
  let player;

  const computer = { name: "Computer" };

  const setPlayer = (name) => {
    player = Player(name);
  };

  let firstPlayer;

  const setFirstPlayer = () => {
    firstPlayer = player;
  };

  const getPlayer = () => player;

  const getComputer = () => computer;

  const switchPlayersTurns = () => {
    firstPlayer = firstPlayer === player ? computer : player;
  };

  const getFirstPlayer = () => firstPlayer;

  const printTurn = () => {
    console.log(`${getFirstPlayer().name} turn`);
  };

  const attackComputerBoard = (col, row, computerBoard) => {
    computerBoard.receiveAttack(col, row);
  };

  const attackPlayerBoard = (playerBoard) => {
    let col = Math.floor(Math.floor(Math.random() * 8));
    let row = Math.floor(Math.floor(Math.random() * 8));

    while (
      playerBoard.receiveAttack(col, row) === "You cant attack the same spot"
    ) {
      col = Math.floor(Math.floor(Math.random() * 8));
      row = Math.floor(Math.floor(Math.random() * 8));
    }
  };

  return {
    name,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    getFirstPlayer,
    printTurn,
    attackComputerBoard,
    attackPlayerBoard,
  };
};

export { Player };
