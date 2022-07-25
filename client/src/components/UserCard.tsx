import React, { useState } from "react";
import { getRandomImage } from "../api/api";
import { CardProps } from "../types/types";
import "../styles/Card.css";

const UserCard = ({ avatarUrl, name }: CardProps) => {
  const [showCat, setShowCat] = useState("");
  const [catImage, setCatImage] = useState("");

  const HandleClick = () => {
    getRandomImage().then((response) => setCatImage(response));
    setTimeout(() => {
      setShowCat("show");
    }, 200);
  };

  return (
    <>
      <div className="card-container">
        <span onClick={HandleClick} className="card__avatar">
          {showCat === "show" ? (
            <img className="cam" src={catImage} alt="cat" />
          ) : (
            <img className="cam" src={avatarUrl} alt="user" />
          )}
        </span>
        <div className="name">{name}</div>
      </div>
    </>
  );
};

export default UserCard;
