const flowers = [
    { name: "Rose", color: "red", price: 15, availability: 20 },
    { name: "Tulip", color: "yellow", price: 8, availability: 5 },
    { name: "Orchid", color: "purple", price: 25, availability: 10 }
];

let expensiveFlowers = flowers.filter(flower => flower.price > 10)
let sortedByAvailability  = expensiveFlowers.sort((a, b) => a.availability - b.availability).reverse();
let flowerNamesUppercase = sortedByAvailability.map(flower => flower.name.toUpperCase());

console.log(flowerNamesUppercase);