import React, { useState } from "react";
import card from "./card.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = ({
  title,
  address,
  badge,
  dismiss,
  children,
  price,
  btnText,
  src,
  path,
}) => {
  const customBadge = ["available", "un-available"];

  // state function to set the badge background color pending on its status (availablility of unavailabilty)
  // const [badgeStatus, setBadgeStatus] = useState(true);

  // const checkBadgeStatus = () => {
  //   if (badge === "un-available") {
  //     setBadgeStatus(false);
  //   }
  // };
  // checkBadgeStatus();

  return (
    <div className={`${card.card} `}>
      <div className={card.badge}>
        {customBadge.includes(badge) ? badge : customBadge[0]}
      </div>
      {children}
      <div>{dismiss}</div>
      {/* img   */}
      <div className={card.img}>
        <img src={src} />
      </div>
      <div className={card.body}>
        {/* title */}
        <h3>{title}</h3>
        {/* address */}
        <address>{address} </address>
        {/* badge */}
        <h3 className={card.price}>{price}</h3>
        {/* button */}
        <Link to={path}>
          <Button btnSize="btn--block">{btnText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
