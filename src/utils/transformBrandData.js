export function transformBrandData(stations, fuelType = "B7") {
  const grouped = {};

  stations.forEach((station) => {
    const brand = station.brand;
    const price = station.prices?.[fuelType];

    if (!price) return; // skip if fuel not available

    if (!grouped[brand]) {
      grouped[brand] = { total: 0, count: 0 };
    }

    grouped[brand].total += price;
    grouped[brand].count += 1;
  });

  return Object.keys(grouped).map((brand) => ({
    brand,
    price: +((grouped[brand].total / grouped[brand].count) / 100).toFixed(2),
  }));
}