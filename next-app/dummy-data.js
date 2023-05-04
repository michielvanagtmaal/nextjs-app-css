const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    image: "images/coding-event.jpeg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    image: "images/introvert-event.jpeg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    image: "images/extrovert-event.jpeg",
    isFeatured: true,
  },
];

export function getFeaturedHouses() {
  return DUMMY_EVENTS.filter((house) => house.isFeatured);
}

export function getAllHouses() {
  return DUMMY_EVENTS;
}

export function getFilteredHouses(dateFilter) {
  const { year, month } = dateFilter;

  let filteredHouses = DUMMY_EVENTS.filter((house) => {
    const houseDate = new Date(house.date);
    return (
      houseDate.getFullYear() === year && houseDate.getMonth() === month - 1
    );
  });

  return filteredHouses;
}

export function getHouseById(id) {
  return DUMMY_EVENTS.find((house) => house.id === id);
}
