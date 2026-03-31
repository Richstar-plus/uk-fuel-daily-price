import { useState, useEffect } from "react";
import { FuelLoader } from "../api/FuelFilterPrice";
import { currencyFormatter } from "../utils/formatter.js";
import { FilterSelectOptions } from "./FilterSelectOptions.jsx";

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

  const fuelTypes = ["E5", "E10", "B7", "SDV"];

  return (
    <>
      <div className="list-main-holder">
        <FilterSelectOptions
          filter={filter}
          setFilter={setFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          setSearchTrigger={setSearchTrigger}
        />

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
                            {(filter === "fuel-type" && filterValue
                              ? [filterValue]
                              : fuelTypes
                            ).map((type) => (
                              <th key={type}>{type}</th>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            {(filter === "fuel-type" && filterValue
                              ? [filterValue]
                              : fuelTypes
                            ).map((type) => (
                              <td key={type}>
                                {station.prices?.[type]
                                  ? currencyFormatter.format(
                                      station.prices[type] / 100,
                                    )
                                  : "-"}
                              </td>
                            ))}
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
