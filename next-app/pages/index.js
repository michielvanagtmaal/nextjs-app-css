import { getFeaturedEvents } from "../dummy-data";
import HouseList from "../components/houses/houses-list";
const featuredHouses = getFeaturedEvents();

function HomePage() {
  const featuredHouses = getFeaturedEvents;


  return (
    <div>
      <HouseList items={featuredHouses}/>
    </div>
  );
}

export default HomePage;
