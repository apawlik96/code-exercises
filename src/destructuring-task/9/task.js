const car = { model: "Sedan", features: ["Sunroof", "Leather seats", "Bluetooth", "Backup Camera", "Navigation"] };
const { features: [firstFeature, secondFeature, ...remainingFeatures] } = car;
console.log(firstFeature, secondFeature, remainingFeatures)