import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_VKIYZIWMQYYg6vI8WZMmKaVRiS6RzotJH3i2Fep5');

convertCurrency('USD', 'INR', 10);


export default async function convertCurrency(from, to, unit) {

    const res = await freecurrencyapi.latest({
        base_currency: from,
        currencies: to
    });
    const mult = res.data[to];
    // console.log(mult * unit);
    return mult * unit;
    
}


