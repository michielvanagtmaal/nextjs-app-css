import Link from "next/link";
import classes from './houses-item.module.css';
import Button from '../ui/button';

function HouseItem(props) {
  const { title, image, location, description, id } = props;

  const formattedAddress = location.replace(", ", " / ");

  const exploreLink = `/houses/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={description} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore house</Button>
        </div>
      </div>
    </li>
  );
}

export default HouseItem;
