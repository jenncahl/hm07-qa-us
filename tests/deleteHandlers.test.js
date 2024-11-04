// eslint-disable-next-line no-undef
const config = require('../config');

const productsListBody = {
    "productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        }
    ]
}

test('deleteRequestStatusToBe201', async () => { 
    let createCartResponse;
    try {
            createCartResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsListBody)
        });

    } catch (error) {
        console.error(error);
    }
    let cart = await createCartResponse.json()
    let cartId = cart["id"]


    let actualStatusDeleteRequest;
    try { 
        const response = await fetch(`${config.API_URL}/api/v1/orders/${cartId}` ,{
		method: 'DELETE'
    });
    actualStatusDeleteRequest=response.status;
    } catch(error) {
        console.error(error); 
    } 
    expect(actualStatusDeleteRequest).toBe(201)
});


test('Checking if cart with Id=? was deleted succesfully', async () => {
    let createCartResponse;
    try {
            createCartResponse = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsListBody)
        });

    } catch (error) {
        console.error(error);
    }
    let cart = await createCartResponse.json()
    let cartId = cart["id"]



    let cartResponse 
try {
	cartResponse = await fetch(`${config.API_URL}/api/v1/orders/${cartId}`, {
	method: 'DELETE',
	});
} catch (error) {
	console.error(error);
}
    let data = await cartResponse.json()
	expect(data).toBe(true);
});