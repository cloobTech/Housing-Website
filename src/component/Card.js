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
  id,
  ShowCaseHandler,
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
        <img src={src} alt={title} />
      </div>
      <div className={card.body}>
        {/* title */}
        <h3>{title}</h3>
        {/* address */}
        <address>{address} </address>
        {/* badge */}
        <h3 className={card.price}>{price}</h3>
        {/* button */}
      </div>
      <div className={card.button}>
        <Link to={path}>
          <Button onClick={() => ShowCaseHandler(id)} btnSize="btn--block">
            {btnText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
