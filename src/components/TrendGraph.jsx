
import BrandChart from "../components/BrandChart";
import { transformBrandData } from "../utils/transformBrandData";

export function TrendGraph({ stations }) {

    const chartData = transformBrandData(stations, "E10");
  return (
    <>
      <div className="trend-graph-container">



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
