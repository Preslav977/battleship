const battleShip = (() => {
  const Ship = (length, hits, sunk) => ({ length, hits, sunk });

  return {
    Ship,
  };
})();

module.exports = battleShip;
