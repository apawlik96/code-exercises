Convert an array of objects into an object where the keys are IDs and values are the objects.

const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
{ id: 3, name: 'Charlie' }
];

// Expected output: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' }, 3: { id: 3, name: 'Charlie' } }
