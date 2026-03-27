import { useState, useEffect } from "react";
import { FuelLoader } from "../api/FuelFilterPrice";

export function Filter() {
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [fuelData, setFuelData] = useState([]);
  const [searchTrigger, setSearchTrigger] = useState(0);

  useEffect(() => {
    async function loadFuel() {
      const result = await FuelLoader(filter, filterValue);
      setFuelData(result.data || []);
    }

    // run immediately for these
    if (filter === "all" || filter === "station-status") {
      loadFuel();
    }

    // run only after search click
    if (
      (filter === "specific" || filter === "fuel-type") &&
      searchTrigger > 0
    ) {
      loadFuel();
    }
  }, [filter, filterValue, searchTrigger]);

  return (
    <>
      <div className="list-main-holder">
        <div className="filter-select">
          <select
            name="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter by...</option>
            <option value="all">All Brands</option>
            <option value="specific">Specific Brand</option>
            <option value="fuel-type">Fuel Type</option>
            <option value="station-status">Station Status</option>
          </select>

          {filter === "specific" ? (
            <div className="filter-input-container">
              <select
                name="filter-type"
                className="filter-type"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="Asda">Asda</option>
                <option value="ESSO">ESSO</option>
                <option value="Jet">Jet</option>
                <option value="Morrisons">Morrisons</option>
                <option value="SHELL">SHELL</option>
                <option value="Sainsbury's">Sainsbury's</option>
                <option value="TEXACO">TEXACO</option>
                <option value="TESCO">TESCO</option>
              </select>
              <button
                className="search-btn"
                onClick={() => setSearchTrigger((prev) => prev + 1)}
              >
                Search
              </button>
            </div>
          ) : filter === "fuel-type" ? (
            <div className="filter-input-container">
              <select
                name="filter-type"
                className="filter-type"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="E5">E5</option>
                <option value="SDV">SDV</option>
                <option value="B7">B7</option>
                <option value="E10">E10</option>
              </select>
              <button
                className="search-btn"
                onClick={() => setSearchTrigger((prev) => prev + 1)}
              >
                Search
              </button>
            </div>
          ) : null}
        </div>
        <div className="list-container">
          <div className="main-list-container">
            <table className="station-list">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Prices</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {filter === "station-status" &&
                  console.log(
                    "Station Status Data:",
                    fuelData.dataSourcesStatus,
                  )}
                {fuelData.map((station) => (
                  <tr key={station.brand + station.address + station.postcode}>
                    <td>{station.brand}</td>
                    <td>
                      <table className="price-table">
                        <thead>
                          <tr>
                            <th>E5</th>
                            <th>E10</th>
                            <th>B7</th>
                            <th>SDV</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>${(station.prices.E5 / 100).toFixed(2) || " - "}</td>
                            <td>${(station.prices.E10 / 100).toFixed(2) || " - "}</td>
                            <td>${(station.prices.B7 / 100).toFixed(2) || " - "}</td>
                            <td>${(station.prices.SDV / 100).toFixed(2) || " -"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>{station.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

