const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const usersById = users.reduce((acc, currentValue) => {
    acc[currentValue.id]= currentValue
    return acc;
}, {})
console.log(usersById)