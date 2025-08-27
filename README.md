
## Installation  

```bash
npm install ind-convert-currency
````

---

## Usage

```javascript
import convertCurrency from 'convert-currency';

// Convert 1 USD to INR
convertCurrency('USD', 'INR', 1).then(result => {
  console.log(`Converted Amount: ${result}`);
});
```

### Example with custom values

```javascript
// Convert 10 USD to EUR
convertCurrency('USD', 'EUR', 10).then(result => {
  console.log(`Converted Amount: ${result}`);
});
```

---

## Function Signature

```ts
convertCurrency(from: string, to: string, unit: number): Promise<number>
```

* **from** → base currency code (e.g. `'USD'`)
* **to** → target currency code (e.g. `'INR'`)
* **unit** → amount in base currency (e.g. `10`)
* **returns** → `Promise<number>` (converted amount)

---

## Author

👤 **Rishav Tiwari**

* GitHub: [https://github.com/rishavtiwari22](https://github.com/rishavtiwari22)
* Email: [rishav@navgurukul.org](mailto:rishav@navgurukul.org)

