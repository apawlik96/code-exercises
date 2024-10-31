const vacations = [
    { location: "Sweden", temperature: -5, rating: 4.2 },
    { location: "Egypt", temperature: 30, rating: 4.7 },
    { location: "Canada", temperature: -10, rating: 4.4 }
];

const vacationsAboveZero = vacations.filter(vacation => vacation.temperature < 0)
let vacationsWithTemperatureToRating  = vacationsAboveZero.map(vacation => ({
    location: vacation.location,
    temperatureToRatingRatio: Math.round(vacation.temperature * vacation.rating),
})).sort((a, b) => a.temperatureToRatingRatio - b.temperatureToRatingRatio);
let locationNames = vacationsWithTemperatureToRating.map(vacation => ({
    location: vacation.location,
}))

console.log(locationNames);