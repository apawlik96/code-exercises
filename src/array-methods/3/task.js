const flowers = [
    { name: "Daisy", season: "spring", colors: ["white", "yellow"], price: 5 },
    { name: "Sunflower", season: "summer", colors: ["yellow", "orange"], price: 7 },
    { name: "Poinsettia", season: "winter", colors: ["red"], price: 10 }
];

const uniqueColors = [...new Set(flowers.map(flower => flower.color))];
const filteredFlowers = flowers.filter(flower => uniqueColors.includes(flower.color));
const result = filteredFlowers.map(flower => ({
    name: flower.name,
    season: flower.season
}));

console.log(result);