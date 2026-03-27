import { useState } from "react";
import BrandChart from "../components/BrandChart";
import { transformBrandData } from "../utils/transformBrandData";

export function TrendGraph({ stations }) {
  const [fuelFilter, setFuelFilter] = useState("");
  const [fuelFilterValue, setFuelFilterValue] = useState("");

    const chartData = transformBrandData(stations, "E10");
  return (
    <>
      <div className="trend-graph-container">
        <div className="trend-graph-search">
          <select
            name="search"
            className="search-select"
            value={fuelFilter}
            onChange={(e) => setFuelFilter(e.target.value)}
          >
            <option value="search by fuel type">Search by Fuel Type</option>
            <option value="search by location">Search by Location</option>
          </select>

          {fuelFilter === "search by fuel type" && (
            <div className="fuel-type-input-container">
              <select
                name="fuel-type"
                className="fuel-type"
                value={fuelFilterValue}
                onChange={(e) => setFuelFilterValue(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="E10">E10</option>
                <option value="SDV">SDV</option>
                <option value="E5">E5</option>
              </select>
              <button className="search-btn">Search</button>
            </div>
          )}
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
                    <tr key={station.site_id}>
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
    </>
  );
}
