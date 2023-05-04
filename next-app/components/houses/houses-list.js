import HouseItem from "./houses-item";
import classes from './houses-list.module.css';

function HouseList(props) {
  const { items } = props;

  return (
  <ul className={classes.list}>
    {items.map((house) => (
      <HouseItem
        key={house.id}
        id={house.id}
        title={house.title}
        description={house.description}
        location={house.location}
        image={house.image}
      />
    ))}
  </ul>
)}
export default HouseList;
