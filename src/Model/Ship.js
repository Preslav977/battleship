/* eslint-disable no-param-reassign */
const randomUUID = function b(a) {
  return a
    ? // eslint-disable-next-line no-bitwise
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

const battleShipLogic = (() => {
  const Ship = (
    name,
    length,
    numberOfHits,
    isShipSunk,
    isPlaced,
    id = randomUUID()
  ) => {
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
        // console.log("Carrier got sunk");
        return true;
      }
      if (name === "battleShip" && length === 4 && numberOfHits === 4) {
        // console.log("Battleship got sunk");
        return true;
      }

      if (name === "destroyer" && length === 3 && numberOfHits === 3) {
        // console.log("Destroyer got sunk");
        return true;
      }

      if (name === "subMarine" && length === 3 && numberOfHits === 3) {
        // console.log("Submarine got sunk");
        return true;
      }

      if (name === "patrolBoat" && length === 2 && numberOfHits === 2) {
        // console.log("PatrolBoat got sunk");
        return true;
      }
      return false;
    };

    const resetNumberOfHits = () => {
      if (
        (name === "carrier" && numberOfHits === 5 && length === 5) ||
        (name === "carrier" && numberOfHits > 0 && length === 5)
      ) {
        numberOfHits = 0;
      }

      if (
        (name === "battleShip" && numberOfHits === 4) ||
        (name === "battleShip" && numberOfHits > 0)
      ) {
        numberOfHits = 0;
      }

      if (
        (name === "destroyer" && numberOfHits === 3) ||
        (name === "destroyer" && numberOfHits > 0)
      ) {
        numberOfHits = 0;
      }

      if (
        (name === "subMarine" && numberOfHits === 3) ||
        (name === "subMarine" && numberOfHits > 0)
      ) {
        numberOfHits = 0;
      }

      if (
        (name === "patrolBoat" && numberOfHits === 2) ||
        (name === "patrolBoat" && numberOfHits > 0)
      ) {
        numberOfHits = 0;
      }
    };

    return {
      get name() {
        return name;
      },
      get length() {
        return length;
      },
      get numberOfHits() {
        return numberOfHits;
      },
      set numberOfHits(value) {
        numberOfHits = value;
      },
      get isShipSunk() {
        return isShipSunk;
      },
      set isShipSunk(value) {
        isShipSunk = value;
      },
      get isPlaced() {
        return isPlaced;
      },
      set isPlaced(value) {
        isPlaced = value;
      },
      get id() {
        return id;
      },
      hit,
      isSunk,
      resetNumberOfHits,
    };
  };

  return {
    Ship,
  };
})();

export { battleShipLogic };
