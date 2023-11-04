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

  return {
    name,
    setPlayer,
    setFirstPlayer,
    getPlayer,
    getComputer,
    switchPlayersTurns,
    getFirstPlayer,
    printTurn,
  };
};

export { Player };
