const cart = [
    { name: 'Laptop', price: 1000, quantity: 1 },
    { name: 'Mouse', price: 50, quantity: 2 },
    { name: 'Keyboard', price: 100, quantity: 1 }
];

const totalCost = cart.reduce((acc ,currentValue) => {
    return acc + (currentValue.price * currentValue.quantity);
}, 0)
console.log(totalCost) 