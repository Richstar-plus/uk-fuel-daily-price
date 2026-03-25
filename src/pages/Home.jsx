import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Cards";
import "./Home.css";
import BrandChart from "../components/BrandChart";
import { transformBrandData } from "../utils/transformBrandData";

export function HomePage() {
  const fuel = useLoaderData();
  const stations = fuel.data || [];
  console.log(fuel);
  const chartData = transformBrandData(stations, "E10");
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
          <div className="trend-graph-search">
            <select name="search" className="search-select">
              <option value="search by fuel type">Search by Fuel Type</option>
              <option value="search by location">Search by Location</option>
            </select>
            <div className="fuel-type-input-container">
              <select name="fuel-type" className="fuel-type">
                <option value="E10">E10</option>
                <option value="SDV">SDV</option>
                <option value="ULSP">E5</option>
              </select>
              <button className="search-btn">Search</button>
            </div>
          </div>
          <div className="trend-graph-contaner">
            <div className="trend-graph">
              <div className="trend-graph-title">Brand Prices</div>
              <BrandChart data={chartData} />
            </div>
            <div className="trend-list">
              <h5>Brands and Address</h5>
              <div className="station-list">
                <table>
                  <thead>
                    <tr>
                      <th>Brand</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stations.map((station) => (
                      <tr key={station.id}>
                        <td>{station.brand}</td>
                        <td>{station.address}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="list-container"></div>
      </div>
    </>
  );
}
