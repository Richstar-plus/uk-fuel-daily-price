import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Cards";
import "./Home.css";

export function HomePage() {
    const fuel = useLoaderData();
  console.log(fuel);
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
            price={0.8}
            className="others"
            station="Jet Station, Leads"
          />
          <Card
            title="Most Expensive"
            price={0.8}
            className="others"
            station="Jet Station, Leads"
          />
        </div>
        <div className="trend-graph-container">
          <div className="trend-graph">

          </div>
        </div>
        <div className="list-container">

        </div>
      </div>
    </>
  );
}
