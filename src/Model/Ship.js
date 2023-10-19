const battleShipBoard = (() => {
  const Ship = (length, numberOfHits, isShipSunk) => {
    const getShipHits = () => numberOfHits;

    const hit = () => {
      const shipTakingHit = numberOfHits++;

      if (shipTakingHit <= 5) {
        return "The ship, cannot be hit anymore!";
      }

      return { length, numberOfHits, isShipSunk };
    };

    const isSunk = () => {
      if (length === 5 && numberOfHits === 5) {
        console.log("Carrier got sunk");
        return true;
      }

      if (length === 4 && numberOfHits === 4) {
        console.log("Battleship got sunk");
        return true;
      }

      if (length === 3 && numberOfHits === 3) {
        console.log("Destroyer got sunk");
        return true;
      }

      if (length === 3 && numberOfHits === 3) {
        console.log("Submarine got sunk");
        return true;
      }

      if (length === 2 && numberOfHits === 2) {
        console.log("Patrol boat got sunk");
        return true;
      }

      return false;
    };

    return { length, getShipHits, isShipSunk, hit, isSunk };
  };

  return {
    Ship,
  };
})();

module.exports = battleShipBoard;
