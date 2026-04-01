import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <FontAwesomeIcon icon={faGasPump} /> UK Daily Fuel Price
        </h1>
      </div>
      <div className="icon"></div>
    </header>
  );
}
