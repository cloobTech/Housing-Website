import React from "react";
import showcaseitem from "./showcaseitem.module.css";
import Button from "./Button";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowCaseItem = ({
  dismiss,
  children,
  description,
  houseName,
  address,
  badge,
  price,
  title,
}) => {
  const customBadge = ["available", "un-available"];

  return (
    <div className={showcaseitem.container}>
      <div className={showcaseitem.showcaseImage}>
        {/* <div className={showcaseitem.blend}></div> */}
      </div>
      <div className={showcaseitem.houseDetailsContainer}>
        <div className={showcaseitem.houseDetails}>
          <div className={showcaseitem.badge}>
            {customBadge.includes(badge) ? badge : customBadge[0]}
          </div>
          <Link to="/">
            <div className={showcaseitem.dismiss}>
              <FaTimesCircle />
            </div>
          </Link>
          <h3>{houseName}</h3>
          <address>{address}</address>
          <p>{description}</p>
          <h2 className={showcaseitem.price}>{price}</h2>
          <div className={showcaseitem.buttons}>
            <Button btnColor="btn--secondary">Make payment</Button>
            <Button color="#fff" btnColor="btn--outline">
              Add to watch list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseItem;
