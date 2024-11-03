// eslint-disable-next-line no-undef
const config = require('../config');


test('deleteRequestStatusToBe201', async () => { 
    let actualStatusDeleteRequest;
    try { 
        const response = await fetch(`${config.API_URL}/api/v1/orders/${cartId}`);
		method: 'DELETE'
    });
    actualStatusDeleteRequest=response.status;
    } catch(error) {
        console.error(error); 
    } 
    expect(actualStatusDeleteRequest).toBe(201);
});


test('Checking if cart with Id=? was deleted succesfully', async () => {
let cartId
try {
	const response = await fetch(`${config.API_URL}/api/v1/orders/${cartId}`, {
	method: 'DELETE',
	});
    cartId = await response.json()
} catch (error) {
	console.error(error);
}
	expect(data["ok"]).toBe(true);
});