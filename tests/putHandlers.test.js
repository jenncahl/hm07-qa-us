// eslint-disable-next-line no-undef
const config = require('../config');

const kit1PriceChange = {
    "price": 175
};

test('ifKitPriceChanges', async () => {
	let kit1PriceChangeResponse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(kit1PriceChange)
		});
		kit1PriceChangeResponse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(kit1PriceChangeResponse["ok"]).toBe(true);	
});

const requestBody = {
    "price": 175
};

test('putRequestStatusToBe200', async () => {
    let actualStatusPutRequest;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/1` ,{
			method: 'PUT',
			headers: {
                'Content-Type': 'application/json' // Specify the content type
            },
            body: JSON.stringify(requestBody)
		});
		actualStatusPutRequest=response.status
        // Extract response code status
        
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusPutRequest).toBe(200);
});