import { getFeaturedEvents } from "@/dummy-data";
import classes from "./homepage.module.css";
import HouseList from "@/components/houses/houses-list";
const featuredHouses = getFeaturedEvents();

function HomePage() {
  return (
    <div>
      <HouseList items={featuredHouses}/>
    </div>
  );
}

export default HomePage;
