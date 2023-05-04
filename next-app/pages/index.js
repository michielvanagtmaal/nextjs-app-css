import { getFeaturedHouses } from "../dummy-data";
import HouseList from "../components/houses/houses-list";
const featuredHouses = getFeaturedHouses();

function HomePage() {
  const featuredHouses = getFeaturedHouses();


  return (
    <div>
      <HouseList items={featuredHouses}/>
    </div>
  );
}

export default HomePage;
