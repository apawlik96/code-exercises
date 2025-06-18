function combineTwoTables (personTable, addressTable) {
    const result = personTable.map((item) => {
        const address = addressTable.filter(address => address.personId === item.personId)[0];
        return {
            firstName: item.firstName,
            lastName: item.lastName,
            city: address ? address.city : null,
            state: address ? address.state : null
        }
    })
    return result;
}

const Person = [
    { 
        personId: 1, 
        lastName: "Wang", 
        firstName: "Allen" 
    },
    { 
        personId: 2, 
        lastName: "Alice", 
        firstName: "Bob" 
    }
];

const Address = [
    { 
        addressId: 1, 
        personId: 2, 
        city: "New York City", 
        state: "New York" 
    },
    { 
        addressId: 2, 
        personId: 3, 
        city: "Leetcode", 
        state: "California" 
    }
];

console.log(combineTwoTables(Person, Address))