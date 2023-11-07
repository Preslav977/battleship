const randomUUID = function b(a) {
  return a
    ? // eslint-disable-next-line no-bitwise
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

const battleShipLogic = (() => {
  const Ship = (name, length, numberOfHits, isShipSunk, id = randomUUID()) => {
    const getShipHits = () => numberOfHits;

    const hit = () => {
      const shipTakingHit = numberOfHits++;

      if (shipTakingHit >= length) {
        return "The ship, cannot be hit anymore!";
      }
      console.log(`Ship ${name} got hit`);

      return { numberOfHits };
    };

    const isSunk = () => {
      if (name === "carrier" && length === 5 && numberOfHits === 5) {
        console.log("Carrier got sunk");
        return true;
      }

      if (name === "battleShip" && length === 4 && numberOfHits === 4) {
        console.log("Battleship got sunk");
        return true;
      }

      if (name === "destroyer" && length === 3 && numberOfHits === 3) {
        console.log("Destroyer got sunk");
        return true;
      }

      if (name === "subMarine" && length === 3 && numberOfHits === 3) {
        console.log("Submarine got sunk");
        return true;
      }

      if (name === "patrolBoat" && length === 2 && numberOfHits === 2) {
        console.log("Patrol boat got sunk");
        return true;
      }

      return false;
    };

    return { name, length, getShipHits, isShipSunk, id, hit, isSunk };
  };

  return {
    Ship,
  };
})();

export { battleShipLogic };
