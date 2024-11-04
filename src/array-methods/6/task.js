const gardens = [
    { location: "Botanical", area: 500, flowers: ["Rose", "Tulip"] },
    { location: "Community", area: 300, flowers: ["Sunflower", "Daisy"] },
    { location: "City Park", area: 700, flowers: ["Orchid", "Lavender"] }
];

const largeGardens = gardens.filter(garden => garden.area > 400);

const gardensWithFlowerCount = largeGardens.map(garden => ({
    location: garden.location,
    area: garden.area,
    flowers: garden.flowers.length,
}));

const sortedGardensByFlowerCount = gardensWithFlowerCount.sort((a, b) => a.flowers - b.flowers).reverse();

console.log(sortedGardensByFlowerCount);