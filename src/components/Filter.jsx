import { useState } from "react";

export function Filter({ stations }) {
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
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

          {(filter === "specific" || filter === "fuel-type") && (
            <div className="filter-input-container">
              <select
                name="filter-type"
                className="filter-type"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
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
        <div className="list-container">
          <div className="main-list-container">
            <table className="station-list">
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
    </>
  );
}
