const trips = [
    { destination: "Italy", days: 10, rating: 4.8 },
    { destination: "Brazil", days: 5, rating: 4.5 },
    { destination: "Australia", days: 12, rating: 4.9 }
];

let tripsWithScores = trips.map(trip => ({
    destination: trip.destination,
    tripScore: Math.round(trip.days * trip.rating),
}));
let filteredTrips = tripsWithScores.filter(score => score.tripScore <= 50).sort((a, b) => a.tripScore - b.tripScore).reverse();
let destinationNames = filteredTrips.map(trip => ({
    destination: trip.destination,
}));

console.log(destinationNames);