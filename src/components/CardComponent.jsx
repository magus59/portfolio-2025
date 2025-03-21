import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardComponent.css";

const CardComponent = ({
  title,
  spanText,
  paragraph,
  imageSrc,
  date,
  link,
  navigateTo,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="card">
      <div className="img-btn">
        <h2 className="card-title">
          {title} <span className="tecno">{spanText}</span>
        </h2>
        <div className="date">{date}</div>
        <p className="paragrapheProjet">{paragraph}</p>
      </div>
      <div className="microserv">
        <img
          id="microservices"
          src={imageSrc}
          alt="image du projet"
          style={{ cursor: "pointer" }}
        />
        <div className="card-transparent" onClick={handleClick}>ENTRER</div>
      </div>
    </div>
  );
};

export default CardComponent;
