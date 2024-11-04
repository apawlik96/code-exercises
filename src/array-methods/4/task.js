const trips = [
    { location: "Rome", days: 7, cost: 1400 },
    { location: "Sydney", days: 14, cost: 2800 },
    { location: "Maui", days: 10, cost: 2500 }
];

const tripsWithCostPerDay = trips.map(trip => ({
    ...trip,
    costPerDay: trip.cost / trip.days
}));

const expensiveTrips = tripsWithCostPerDay.filter(trip => trip.costPerDay > 150)
const sortedByLocation = expensiveTrips.sort((a, b) => {
    if (a.location < b.location) return -1;
    if (a.location > b.location) return 1;
    return 0;
});
const filteredTrips = sortedByLocation.map(trip => ({
    location: trip.location,
    days: trip.days
}));

console.log(filteredTrips);