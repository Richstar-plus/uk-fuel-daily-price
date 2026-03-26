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

  const cheapest = e5Prices.reduce(
    (min, curr) => (curr.price < min.price ? curr : min),
    e5Prices[0],
  );

  const expensive = e5Prices.reduce(
    (max, curr) => (curr.price > max.price ? curr : max),
    e5Prices[0],
  );
  console.log(cheapest);
  console.log(expensive);
  return (
    <>
      <div className="main-content">
        <div className="heading">
          <h3>Dashboard</h3>
        </div>
        <div className="card-content">
          <Card title="Petrol Price" price={1.45} className="btn" />
          <Card title="Diesel Price" price={1.3} className="btn" />
          <Card
            title="Cheapest Today"
            className="others"
            station={cheapest.station}
            price={cheapest.price}
          />
          <Card
            title="Most Expensive"
            price={expensive.price}
            className="others"
            station={expensive.station}
          />
        </div>
        <TrendGraph stations={stations} />
        <Filter stations={stations} />
      </div>
    </>
  );
}
