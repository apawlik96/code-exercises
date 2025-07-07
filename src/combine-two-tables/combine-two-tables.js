function findAddressByPersonId(addressTable, personId) {
    return addressTable.find(address => address.personId === personId);
}

function combineTwoTables (personTable, addressTable) {
    const result = personTable.map((item) => {
        const address = findAddressByPersonId(addressTable, item.personId);
        return {
            firstName: item.firstName,
            lastName: item.lastName,
            city: address?.city,
            state: address?.state
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