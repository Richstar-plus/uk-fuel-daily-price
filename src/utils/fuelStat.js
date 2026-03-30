export function getFuelStats(stations) {
  function extractPrices(fuelKey) {
    return stations
      .map((station) => {
        const price = station.prices?.[fuelKey];
        if (!price) return null;

        return {
          price: Number(price / 100), // keep numeric
          station: station.brand,
        };
      })
      .filter(Boolean);
  }

  function getMinMax(list) {
    if (!list.length) return { cheapest: null, expensive: null };

    const cheapest = list.reduce(
      (min, curr) => (curr.price < min.price ? curr : min),
      list[0]
    );

    const expensive = list.reduce(
      (max, curr) => (curr.price > max.price ? curr : max),
      list[0]
    );

    return {
      cheapest: { ...cheapest, price: cheapest.price.toFixed(2) },
      expensive: { ...expensive, price: expensive.price.toFixed(2) }
    };
  }

  const e5Prices = extractPrices("E5");
  const e10Prices = extractPrices("E10");
  const b7Prices = extractPrices("B7");
  const sdvPrices = extractPrices("SDV");

  return {
    e5: getMinMax(e5Prices),
    e10: getMinMax(e10Prices),
    b7: getMinMax(b7Prices),
    sdv: getMinMax(sdvPrices),
  };
}