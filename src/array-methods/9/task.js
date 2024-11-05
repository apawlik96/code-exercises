const flowerShops = [
    { shopName: "Bloom", city: "New York", flowers: ["Rose", "Tulip"] },
    { shopName: "Petals", city: "Paris", flowers: ["Orchid", "Lily", "Violet"] },
    { shopName: "Floral", city: "Tokyo", flowers: ["Sunflower", "Lavender"] }
];

const shopsWithThreeOrMoreFlowers = flowerShops.filter(flower => flower.flowers.length >= 3 )

const shopsWithFlowerCount = shopsWithThreeOrMoreFlowers.map( shop => ({
    shopName: shop.shopName,
    city: shop.city,
    flowers: shop.flowers.length,
})).sort((a, b) => {
    if (a.flowers < b.flowers) return -1;
    if (a.flowers > b.flowers) return 1;
    return 0;
});
const result = shopsWithFlowerCount.map( shop => ({
    shopName: shop.shopName,
}))

console.log(result);