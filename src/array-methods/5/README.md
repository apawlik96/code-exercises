Given the object:
const flowerInventory = {
Rose: { quantity: 100, price: 5 },
Tulip: { quantity: 150, price: 3 },
Orchid: { quantity: 50, price: 10 }
};

Convert the object to an array of flowers with name, totalValue (quantity \* price), and quantity. Filter out flowers with totalValue below $500, then return only the names of the remaining flowers, sorted by totalValue in descending order.
