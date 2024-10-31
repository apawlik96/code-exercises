const flowers = [
    { name: "Lavender", fragrance: 8, season: "summer" },
    { name: "Chamomile", fragrance: 6, season: "spring" },
    { name: "Dahlia", fragrance: 5, season: "fall" }
];
const fragrantFlowers = flowers.filter(rate => rate.fragrance > 5)
const flowersBySeason = fragrantFlowers.reduce((accumulator, flower) => {
    accumulator[flower.season] = flower.name;
    return accumulator;
}, {});

console.log(flowersBySeason);