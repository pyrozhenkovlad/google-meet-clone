import React from "react";

interface CardProps {
  avatarUrl?: string;
  name?: string;
  children?: React.ReactChild | React.ReactNode;
}

const UserCard = ({ avatarUrl, name, children }: CardProps) => {
  return (
    <>
      <div className="card-container">
        <div className="card__avatar">
          <img src={avatarUrl} alt="user" />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
