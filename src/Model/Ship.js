const battleShipModel = (() => {
  const Ship = (length, hits, sunk) => {
    const getShipLength = () => length;

    const getShipHits = () => hits;

    const getShipSunk = () => sunk;

    const hit = () => {
      const decreaseShipLength = length--;
      const shipTakingHit = hits++;

      if (decreaseShipLength === 0 && shipTakingHit <= 5) {
        return "The ship, cannot be hit anymore!";
      }

      return { length, hit, sunk };
    };

    const isSunk = () => {
      if (length === 0 && hits <= 5) {
        return true;
      }
      return false;
    };

    return { getShipLength, getShipHits, getShipSunk, hit, isSunk };
  };

  return {
    Ship,
  };
})();

module.exports = battleShipModel;
