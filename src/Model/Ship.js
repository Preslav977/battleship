const battleShipModel = (() => {
  const Ship = (length, hits, sunk) => {
    const getShipLength = () => length;

    const getShipHits = () => hits;

    const getShipSunk = () => sunk;

    const hit = () => {
      const shipTakingHit = hits++;
      const shipDecreasingLength = length--;

      if (shipDecreasingLength === 0 && shipTakingHit <= 5) {
        return "The ship, cannot be hit anymore!";
      }

      return { length, hit, sunk };
    };

    return { getShipLength, getShipHits, getShipSunk, hit };
  };

  return {
    Ship,
  };
})();

module.exports = battleShipModel;
