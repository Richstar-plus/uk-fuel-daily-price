import "./Cards.css";

export function Card({
  title,
  e5price,
  e5station,
  b7price,
  b7station,
  e10Price,
  e10Station,
  sdvPrice,
  sdvStation,
  fuelGrade,
}) {
  return (
    <div className={"card"}>
      <h4 className="title">{title}</h4>
      <div className="price">
        {fuelGrade ? (
          <table>
            <thead>
              <tr>
                <th>Station</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{e5station}</td>
                <td>E5</td>
                <td>{e5price}</td>
              </tr>
              <tr>
                <td>{b7station}</td>
                <td>B7</td>
                <td>{b7price}</td>
              </tr>
              <tr>
                <td>{e10Station}</td>
                <td>E10</td>
                <td>{e10Price}</td>
              </tr>
              <tr>
                <td>{sdvStation}</td>
                <td>SDV</td>
                <td>{sdvPrice}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>price</p>
        )}
      </div>
    </div>
  );
}
