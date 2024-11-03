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

test('Creating a shopping cart', async () => {
    let newShoppingCart;
    try {
             const response = await fetch(`${config.API_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsListBody)
        });
        newShoppingCart = await response.json();

    } catch (error) {
        console.error(error);
    }
    expect(newShoppingCart["id"]).toBeGreaterThan(0); 
});


//put your body here
const productsList = {
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

test('postRequestStatusToBe201', async () => {
    let actualStatusPostRequest;
    try {
       const response = await fetch(`${config.API_URL}/api/v1/orders` ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify the content type
            },
            body: JSON.stringify(productsListBody)
        });
        actualStatusPostRequest = response.status;
        // Extract response code status

    } catch (error) {
        console.error(error);
    }
   
    expect(actualStatusPostRequest).toBe(201);
});