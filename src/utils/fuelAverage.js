export function getFuelAverages(stations) {
  function averageFor(type) {
    const prices = stations
      .map((station) => station.prices?.[type])
      .filter(Boolean)
      .map((price) => Number(price) / 100);

    if (!prices.length) return null;

    const total = prices.reduce((sum, p) => sum + p, 0);
    return (total / prices.length).toFixed(2);
  }

  return {
    e5: averageFor("E5"),
    e10: averageFor("E10"),
    b7: averageFor("B7"),
    sdv: averageFor("SDV"),
  };
}