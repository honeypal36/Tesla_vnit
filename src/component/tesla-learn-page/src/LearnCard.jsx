import React from "react";
import "./learn.css";

const LearnCard = ({ title, image, onClick }) => {
  return (
    <div
      className="learn-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      <h3>{title}</h3>
      <img className="icon" src={image} alt={`${title} Icon`} />
    </div>
  );
};

// LearnCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default LearnCard;
