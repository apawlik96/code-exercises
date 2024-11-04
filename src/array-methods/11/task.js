const vacationPackages = [
    { destination: "Maldives", days: 10, cost: 2000 },
    { destination: "Alaska", days: 5, cost: 1000 },
    { destination: "Switzerland", days: 7, cost: 1500 }
];

const vacationPackagesWithAverageCost = vacationPackages.map(vacationPackage => ({
    destination: vacationPackage.destination,
    days: vacationPackage.days,
    cost: vacationPackage.cost,
    averageDailyCost: Math.round(vacationPackage.cost / vacationPackage.days),
}));
const filteredVacationPackages = vacationPackagesWithAverageCost.filter(price => price.averageDailyCost < 200)
const sortedDestinations = filteredVacationPackages.map(vacation => ({
    destination: vacation.destination,
})).sort((a, b) => {
    if (a.destination < b.destination) return -1;
    if (a.destination > b.destination) return 1;
    return 0;
});

console.log(sortedDestinations);