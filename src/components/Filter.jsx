import { useState, useEffect } from "react";
import { FuelLoader } from "../api/FuelFilterPrice";
import { FilterSelectOptions } from "./FilterSelectOptions.jsx";
import { StationList } from "./StationList.jsx";

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
          <StationList
            fuelData={fuelData}
            filter={filter}
            filterValue={filterValue}
            fuelTypes={fuelTypes}
          />
        </div>
      </div>
    </>
  );
}
