const product = { id: 101, name: "Laptop", brand: "TechBrand", price: 1200, warranty: "2 years" };
const { id, name, ...restProperties } = product;
console.log(id, name, restProperties)