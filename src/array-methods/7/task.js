const flowers = [
    { name: "Lily", price: 12, stock: 50 },
    { name: "Violet", price: 8, stock: 30 },
    { name: "Carnation", price: 5, stock: 70 },
];

const revenuePotentialPerFlower = flowers.map(flower => ({
    name: flower.name,
    revenuePotential: flower.price * flower.stock
}));
const filteredFlowers = revenuePotentialPerFlower.filter(flower => flower.revenuePotential < 500)
const sortedFlowersByRevenue = filteredFlowers.sort((a, b) => a.revenuePotential - b.revenuePotential);

console.log(sortedFlowersByRevenue);