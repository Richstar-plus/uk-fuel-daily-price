import { currencyFormatter } from "../utils/formatter.js";

export function StationList({ fuelData, filter, filterValue, fuelTypes }) {
  return (
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
            console.log("Station Status Data:", fuelData.dataSourcesStatus)}
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
  );
}
