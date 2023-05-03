import HouseItem from "./houses-item";

function HouseList(props) {
  const { items } = props;

  return;
  
    {items.map((event) => (
      <HouseItem
        key={house.id}
        id={house.id}
        title={house.title}
        description={house.description}
        location={house.location}
        image={house.image}
      />
    ))}

}

export default HouseList;
