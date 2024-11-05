const flowers = [
    { name: "Rose", color: "red", price: 15, availability: 20 },
    { name: "Tulip", color: "yellow", price: 8, availability: 5 },
    { name: "Orchid", color: "purple", price: 25, availability: 10 }
];

const expensiveFlowers = flowers.filter(flower => flower.price > 10)
const sortedByAvailability  = expensiveFlowers.sort((a, b) => a.availability - b.availability).reverse();
const flowerNamesUppercase = sortedByAvailability.map(flower => flower.name.toUpperCase());

console.log(flowerNamesUppercase);