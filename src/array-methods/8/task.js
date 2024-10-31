const vacationRatings = {
    Maldives: { cost: 2000, rating: 4.9 },
    Norway: { cost: 1800, rating: 4.7 },
    Canada: { cost: 1600, rating: 4.6 }
};

const vacationsArray = Object.entries(vacationRatings).map(([key, value]) => ({
    name: key,
    cost: value.cost,
    rating: value.rating,
    costPerPointOfRating: Math.round(value.cost / value.rating),
}));
const filteredVacations = vacationsArray.filter(vacation => vacation.costPerPointOfRating >= 400)
let sortedVacationsByCostPerPoint = filteredVacations.sort((a, b) => a.rating - b.rating);
let result = sortedVacationsByCostPerPoint.map(vacation => ({
    location: vacation.name,
}));

console.log(result);