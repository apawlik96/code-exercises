const flowerInventory = {
    Rose: { quantity: 100, price: 5 },
    Tulip: { quantity: 150, price: 3 },
    Orchid: { quantity: 50, price: 10 }
};

const flowerArray = Object.entries(flowerInventory).map(([key, value]) => ({
    name: key,
    totalValue: value.quantity * value.price,
    quantity: value.quantity
}));
const valuableFlowers = flowerArray.filter(value => value.totalValue >= 500)
const sortedFlowersByValue = valuableFlowers.sort((a, b) => a.totalValue - b.totalValue).reverse();

console.log(sortedFlowersByValue);