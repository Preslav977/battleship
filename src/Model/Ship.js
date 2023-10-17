const battleShipModel = (() => {
  const Ship = (length, hits, sunk) => ({ length, hits, sunk });

  return {
    Ship,
  };
})();

module.exports = battleShipModel;
