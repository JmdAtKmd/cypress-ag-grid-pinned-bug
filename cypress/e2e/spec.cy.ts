const expectedData = [
    {
        Mission: 'Voyager',
        Company: 'NASA',
        Location: 'Cape Canaveral',
        Date: '1977-09-05',
        Price: 86580000,
    },
    {
        Mission: 'Apollo 13',
        Company: 'NASA',
        Location: 'Kennedy Space Center',
        Date: '1970-04-11',
        Price: 3750000,
    },
    {
        Mission: 'Falcon 9',
        Company: 'SpaceX',
        Location: 'Cape Canaveral',
        Date: '2015-12-22',
        Price: 9750000,
    },
];

const onlyRows = [
    'Mission',
    'Company',
    'Location',
    'date',
    'price'
];

describe('Cypress ag Grid bug', () => {
    it('Should fail with pinned rows using agGridValidateRowsExactOrder', () => {
        cy.visit('localhost:4200');
        cy.get('#my-table').getAgGridData({ onlyRows }).then((actualTable: any,) => {
            cy.agGridValidateRowsExactOrder(actualTable, expectedData);
        });
    });

    it('Should fail with pinned rows using agGridValidateRowsSubset', () => {
        cy.visit('localhost:4200');
        cy.get('#my-table').getAgGridData({ onlyRows }).then((actualTable: any,) => {
            cy.agGridValidateRowsSubset(actualTable, expectedData);
        });
    });
});


const EXPECTED = [{
    "mission": "Voyager",
    "company": "NASA",
    "location": "Cape Canaveral",
    "date": "1977-09-05",
    "price": 86580000
}, {
    "mission": "Apollo 13",
    "company": "NASA",
    "location": "Kennedy Space Center",
    "date": "1970-04-11",
    "price": 3750000
}, {
    "mission": "Falcon 9",
    "company": "SpaceX",
    "location": "Cape Canaveral",
    "date": "2015-12-22",
    "price": 9750000
}];

const ACTUAL = [{
    "Mission": "", // Mission is empty because the first column is a checkbox
    "Company": "Titan-Centaur", // This is actually the Rocket
    "Location": "Voyager",
    "Date": "NASA",
    "Successful": "Cape Canaveral",
    "Rocket": "1977-09-05"
}, {
    "Mission": "",
    "Company": "Saturn V",
    "Location": "Apollo 13",
    "Date": "NASA",
    "Successful": "Kennedy Space Center",
    "Rocket": "1970-04-11"
}, {
    "Mission": "",
    "Company": "Falcon 9",
    "Location": "Falcon 9",
    "Date": "SpaceX",
    "Successful": "Cape Canaveral",
    "Rocket": "2015-12-22"
}];