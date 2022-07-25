import React, { useState } from "react";
import { getRandomImage } from "../api/api";
import { CardProps } from "../types/types";
import "../styles/Card.css";

const UserCard = ({ avatarUrl, name }: CardProps) => {
  const [showCat, setShowCat] = useState(false);
  const [catImage, setCatImage] = useState("");

  const handleClick = () => {
    getRandomImage().then((response) => setCatImage(response));
    setTimeout(() => {
      setShowCat(true);
    }, 200);
  };

  return (
    <>
      <div className="card-container">
        <div onClick={handleClick} className="card__avatar">
          {showCat ? (
            <img className="cam" src={catImage} alt="cat" />
          ) : (
            <img className="cam" src={avatarUrl} alt="user" />
          )}
        </div>
        <div className="name">{name}</div>
      </div>
    </>
  );
};

export default UserCard;
