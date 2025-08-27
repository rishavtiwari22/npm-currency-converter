import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi("fca_live_VKIYZIWMQYYg6vI8WZMmKaVRiS6RzotJH3i2Fep5");

export default async function convertCurrency(from, to, unit) {
  try {
    const res = await freecurrencyapi.latest({
      base_currency: from,
      currencies: to,
    });

    if (!res.data || !res.data[to]) {
      throw new Error(`Invalid response from API. Currency ${to} not found.`);
    }

    const rate = res.data[to];
    return rate * unit;
  } catch (error) {
    console.error("Currency conversion failed:", error.message);
    throw error;
  }
}

