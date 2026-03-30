import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Cards";
import "./Home.css";
import { TrendGraph } from "../components/TrendGraph";
import { Filter } from "../components/Filter";

export function HomePage() {
  const fuel = useLoaderData();
  const stations = fuel.data || [];

  const e5Prices = stations
    .map((station) => {
      const price = station.prices?.E5;

      if (!price) return null;

      return {
        price: Number(price / 100).toFixed(2),
        station: station.brand,
      };
    })
    .filter(Boolean);

  const b7Prices = stations
    .map((station) => {
      const price = station.prices?.B7;

      if (!price) return null;

      return {
        price: Number(price / 100).toFixed(2),
        station: station.brand,
      };
    })
    .filter(Boolean);

  const e10Prices = stations
    .map((station) => {
      const price = station.prices?.E10;

      if (!price) return null;

      return {
        price: Number(price / 100).toFixed(2),
        station: station.brand,
      };
    })
    .filter(Boolean);

  const sdvPrices = stations
    .map((station) => {
      const price = station.prices?.SDV;

      if (!price) return null;

      return {
        price: Number(price / 100).toFixed(2),
        station: station.brand,
      };
    })
    .filter(Boolean);

  const sdvcheapest = sdvPrices.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    sdvPrices[0],
  );

  const sdvexpensive = sdvPrices.reduce(
    (max, curr) => (curr.price > max.price ? curr : max),
    sdvPrices[0],
  );

  const e10cheapest = e10Prices.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    e10Prices[0],
  );

  const e10expensive = e10Prices.reduce(
    (max, curr) => (curr.price > max.price ? curr : max),
    e10Prices[0],
  );

  const e5cheapest = e5Prices.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    e5Prices[0],
  );

  const e5expensive = e5Prices.reduce(
    (max, curr) => (curr.price > max.price ? curr : max),
    e5Prices[0],
  );

  const b7cheapest = b7Prices.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    b7Prices[0],
  );

  const b7expensive = b7Prices.reduce(
    (max, curr) => (curr.price > max.price ? curr : max),
    b7Prices[0],
  );
  return (
    <>
      <div className="main-content">
        <div className="heading">
          <h3>Dashboard</h3>
        </div>
        <div className="card-content">
          <div className="card-fuel-price-holder">
            <Card title="Petrol Price" price={1.45} />
            <Card title="Diesel Price" price={1.3} />
            <Card title="Diesel Price" price={1.3} />
            <Card title="Diesel Price" price={1.3} />
          </div>
          <div className="fuel-grade-container">
            <Card
              title="Cheapest Today"
              className="others"
              e5station={e5cheapest.station}
              e5price={e5cheapest.price}
              b7price={b7cheapest.price}
              b7station={b7cheapest.station}
              e10Price={e10cheapest.price}
              e10Station={e10cheapest.station}
              sdvPrice={sdvcheapest.price}
              sdvStation={sdvcheapest.station}
              fuelGrade
            />
            <Card
              title="Most Expensive"
              e5price={e5expensive.price}
              className="others"
              e5station={e5expensive.station}
              b7price={b7expensive.price}
              b7station={b7expensive.station}
              e10Price={e10expensive.price}
              e10Station={e10expensive.station}
              sdvPrice={sdvexpensive.price}
              sdvStation={sdvexpensive.station}
              fuelGrade
            />
          </div>
        </div>
        <TrendGraph stations={stations} />
        <Filter stations={stations} />
      </div>
    </>
  );
}
