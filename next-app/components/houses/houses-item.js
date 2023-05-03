import Link from "next/link";

function HouseItem(props) {
  const { title, image, location, description, id } = props;

  const formattedAddress = location.replace(", ", "hallo ");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={description} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore house</Link>
        </div>
      </div>
    </li>
  );
}

export default HouseItem;
