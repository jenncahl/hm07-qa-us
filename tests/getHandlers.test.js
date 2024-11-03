// eslint-disable-next-line no-undef
const config = require('../config');

test('getRequestStatusToBe200', async () => { 
    let actualStatusGetRequest;
    try { 
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
        });
        actualStatusGetRequest=response.status
    } catch (error) { 
        console.error(error); 
    }
    expect(actualStatusGetRequest).toBe(200);
});


test('Receiving list of warehouses', async () => {
	let listOfWarehouses;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
        method : "GET",
		});
        listOfWarehouses = await response.json()
	} catch (error) {
		console.error(error);
	}
    expect(listOfWarehouses).toEqual(
        {
            "name": "Everything You Need",
            "workingHours": {
                "start": 7,
                "end": 23
            }
        },
        {
            "name": "Fresh food",
            "workingHours": {
                "start": 8,
                "end": 23
            }
        },
        {
            "name": "Food City",
            "workingHours": {
                "start": 8,
                "end": 21
            }
        },
        {
            "name": "Big World",
            "workingHours": {
                "start": 5,
                "end": 20
            }
        }
});