const user = { id: 1, address: { city: "New York", state: "NY", zip: "10001" } };
const { address: { city, state } } = user;
console.log(city, state)