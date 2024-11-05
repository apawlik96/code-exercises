Given the array:
const vacations = [
{ location: "Sweden", temperature: -5, rating: 4.2 },
{ location: "Egypt", temperature: 30, rating: 4.7 },
{ location: "Canada", temperature: -10, rating: 4.4 }
];

Filter out vacations with temperatures below 0, map each to include a temperatureToRatingRatio (temperature / rating), and return only the location names, sorted by this ratio in descending order.
