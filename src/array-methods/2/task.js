const destinations = {
    Bali: { region: "Asia", cost: 1200, rating: 4.5 },
    Paris: { region: "Europe", cost: 1500, rating: 4.8 },
    Tokyo: { region: "Asia", cost: 1300, rating: 4.7 }
};

const destinationArray = Object.keys(destinations).map((key) => {
    return destinations[key]
})

const highlyRatedDestinations = destinationArray.filter(destination => destination.rating >= 4.6)

const averageCostOfHighlyRated = highlyRatedDestinations.reduce((accumulator, destination) => {
    const sumRated = accumulator + destination.rating;
    return sumRated / highlyRatedDestinations.length;
  }, 0);

console.log(averageCostOfHighlyRated);