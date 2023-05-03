import HouseItem from "./houses-item";

function HouseList(props) {
  const { items } = props;

  return (
    <ul>
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
    </ul>
  );
}
export default HouseList;

