import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";

export function Card({ title, price, className, station }) {
  let buttonContent = <FontAwesomeIcon icon={faArrowUp} />;
  if (station) {
    buttonContent = station;
  }
  return (
    <div className={"card"}>
      <h4 className="title">{title}</h4>
      <p className="price">
        ${price} <span>P L</span>
      </p>
      <p>
        <button className={className}>{buttonContent}</button>
      </p>
    </div>
  );
}
