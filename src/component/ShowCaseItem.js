/** @format */

import showcaseitem from "./showcaseitem.module.css";
import Button from "./Button";
import { FaTimesCircle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const ShowCaseItem = (props) => {
  const { src, description, address, badge, price, title, id } = props;
  const history = useHistory();
  const customBadge = ["available", "un-available"];

  const addToWatchListHandler = (e) => {
    fetch("https://cloob-home-default-rtdb.firebaseio.com/cloob.json", {
      method: "Post",
      headers: {
        Accept: "Application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        src: src,
        description: description,
        address: address,
        price: price,
        title: title,
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => history.replace("./"))
      .catch((err) => history.push("./error"));
  };

  return (
    <div className={showcaseitem.container}>
      <div
        className={showcaseitem.showcaseImage}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
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
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
          <h2 className={showcaseitem.price}>{price}</h2>
          <div className={showcaseitem.buttons}>
            <Button btnColor="btn--secondary">Make payment</Button>
            <Button
              btnColor="btn--outline"
              onClick={() => addToWatchListHandler(id)}
            >
              Add to watch list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseItem;
