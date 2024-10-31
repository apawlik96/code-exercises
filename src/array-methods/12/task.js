const flowerRatings = {
    Rose: { beauty: 8, fragrance: 7 },
    Tulip: { beauty: 7, fragrance: 6 },
    Orchid: { beauty: 9, fragrance: 9 }
};

const flowersWithScores = Object.entries(flowerRatings).map(([key, value]) => ({
    name: key,
    combinedScore: value.beauty + value.fragrance,
}));
const filteredFlowers = flowersWithScores.filter(score => score.combinedScore >= 15);
let sortedFlowers = filteredFlowers.sort((a, b) => a.combinedScore - b.combinedScore);
let flowerName = sortedFlowers.map(flower => ({
    name: flower.name,
}));

console.log(flowerName);