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
      if (numberOfHits === length && isShipSunk === false) {
        console.log(`Ship ${name} got sunk`);
        isShipSunk = true;
        return true;
      }

      return false;
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
    };
  };

  return {
    Ship,
  };
})();

export { battleShipLogic };
