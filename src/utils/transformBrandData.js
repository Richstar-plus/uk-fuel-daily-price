export function transformBrandData(stations) {
  const grouped = {};

  stations.forEach((station) => {
    const brand = station.brand;
    const price = Number(station.price);

    if (!grouped[brand]) {
      grouped[brand] = { total: 0, count: 0 };
    }

    grouped[brand].total += price;
    grouped[brand].count += 1;
  });

  return Object.keys(grouped).map((brand) => ({
    brand,
    price: grouped[brand].total / grouped[brand].count,
  }));
}