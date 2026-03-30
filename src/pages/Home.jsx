import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Cards";
import "./Home.css";
import { TrendGraph } from "../components/TrendGraph";
import { Filter } from "../components/Filter";
import { getFuelStats } from "../utils/fuelStat.js";

export function HomePage() {
  const fuel = useLoaderData();
  const stations = fuel.data || [];
  const fuelStats = getFuelStats(stations);
  const { cheapest: e5cheapest, expensive: e5expensive } = fuelStats.e5;
  const { cheapest: b7cheapest, expensive: b7expensive } = fuelStats.b7;
  const { cheapest: e10cheapest, expensive: e10expensive } = fuelStats.e10;
  const { cheapest: sdvcheapest, expensive: sdvexpensive } = fuelStats.sdv;
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
