
# ind-convert-currency

## Installation

```bash
npm install ind-convert-currency
```

---

## Usage

```javascript
import convertCurrency from 'ind-convert-currency';

// Convert 1 USD to INR
convertCurrency('USD', 'INR', 1).then(result => {
  console.log(`Converted Amount: ${result}`);
});
```

### Example with custom values

```javascript
// Convert 10 INR to USD
convertCurrency("INR", "USD", 10).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
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

## 🌍 Country Currency Codes

Below is the list of countries with their official **currency names and ISO codes (ISO-4217)**:

| Country              | Currency                   | Code |
| -------------------- | -------------------------- | ---- |
| Afghanistan          | Afghani                    | AFN  |
| Albania              | Lek                        | ALL  |
| Algeria              | Algerian Dinar             | DZD  |
| Andorra              | Euro                       | EUR  |
| Angola               | Kwanza                     | AOA  |
| Argentina            | Argentine Peso             | ARS  |
| Armenia              | Armenian Dram              | AMD  |
| Australia            | Australian Dollar          | AUD  |
| Austria              | Euro                       | EUR  |
| Azerbaijan           | Azerbaijan Manat           | AZN  |
| Bahamas              | Bahamian Dollar            | BSD  |
| Bahrain              | Bahraini Dinar             | BHD  |
| Bangladesh           | Taka                       | BDT  |
| Barbados             | Barbados Dollar            | BBD  |
| Belarus              | Belarusian Ruble           | BYN  |
| Belgium              | Euro                       | EUR  |
| Belize               | Belize Dollar              | BZD  |
| Benin                | CFA Franc BCEAO            | XOF  |
| Bhutan               | Ngultrum                   | BTN  |
| Bolivia              | Boliviano                  | BOB  |
| Bosnia & Herzegovina | Convertible Mark           | BAM  |
| Botswana             | Pula                       | BWP  |
| Brazil               | Brazilian Real             | BRL  |
| Brunei Darussalam    | Brunei Dollar              | BND  |
| Bulgaria             | Bulgarian Lev              | BGN  |
| Burkina Faso         | CFA Franc BCEAO            | XOF  |
| Burundi              | Burundi Franc              | BIF  |
| Cambodia             | Riel                       | KHR  |
| Cameroon             | CFA Franc BEAC             | XAF  |
| Canada               | Canadian Dollar            | CAD  |
| Chile                | Chilean Peso               | CLP  |
| China                | Yuan Renminbi              | CNY  |
| Colombia             | Colombian Peso             | COP  |
| Costa Rica           | Costa Rican Colon          | CRC  |
| Croatia              | Euro                       | EUR  |
| Cuba                 | Cuban Peso                 | CUP  |
| Cyprus               | Euro                       | EUR  |
| Czech Republic       | Czech Koruna               | CZK  |
| Denmark              | Danish Krone               | DKK  |
| Dominican Republic   | Dominican Peso             | DOP  |
| Egypt                | Egyptian Pound             | EGP  |
| Ethiopia             | Ethiopian Birr             | ETB  |
| Eurozone             | Euro                       | EUR  |
| Fiji                 | Fiji Dollar                | FJD  |
| Finland              | Euro                       | EUR  |
| France               | Euro                       | EUR  |
| Georgia              | Lari                       | GEL  |
| Germany              | Euro                       | EUR  |
| Ghana                | Ghana Cedi                 | GHS  |
| Greece               | Euro                       | EUR  |
| Guatemala            | Quetzal                    | GTQ  |
| Guyana               | Guyana Dollar              | GYD  |
| Haiti                | Gourde                     | HTG  |
| Honduras             | Lempira                    | HNL  |
| Hong Kong            | Hong Kong Dollar           | HKD  |
| Hungary              | Forint                     | HUF  |
| Iceland              | Iceland Krona              | ISK  |
| India                | Indian Rupee               | INR  |
| Indonesia            | Rupiah                     | IDR  |
| Iran                 | Iranian Rial               | IRR  |
| Iraq                 | Iraqi Dinar                | IQD  |
| Ireland              | Euro                       | EUR  |
| Israel               | New Israeli Sheqel         | ILS  |
| Italy                | Euro                       | EUR  |
| Jamaica              | Jamaican Dollar            | JMD  |
| Japan                | Yen                        | JPY  |
| Jordan               | Jordanian Dinar            | JOD  |
| Kazakhstan           | Tenge                      | KZT  |
| Kenya                | Kenyan Shilling            | KES  |
| Kuwait               | Kuwaiti Dinar              | KWD  |
| Kyrgyzstan           | Som                        | KGS  |
| Laos                 | Kip                        | LAK  |
| Latvia               | Euro                       | EUR  |
| Lebanon              | Lebanese Pound             | LBP  |
| Libya                | Libyan Dinar               | LYD  |
| Lithuania            | Euro                       | EUR  |
| Luxembourg           | Euro                       | EUR  |
| Macau                | Pataca                     | MOP  |
| Madagascar           | Malagasy Ariary            | MGA  |
| Malawi               | Malawi Kwacha              | MWK  |
| Malaysia             | Malaysian Ringgit          | MYR  |
| Maldives             | Rufiyaa                    | MVR  |
| Mali                 | CFA Franc BCEAO            | XOF  |
| Malta                | Euro                       | EUR  |
| Mauritius            | Mauritius Rupee            | MUR  |
| Mexico               | Mexican Peso               | MXN  |
| Moldova              | Moldovan Leu               | MDL  |
| Monaco               | Euro                       | EUR  |
| Mongolia             | Tugrik                     | MNT  |
| Morocco              | Moroccan Dirham            | MAD  |
| Mozambique           | Mozambique Metical         | MZN  |
| Myanmar              | Kyat                       | MMK  |
| Namibia              | Namibia Dollar             | NAD  |
| Nepal                | Nepalese Rupee             | NPR  |
| Netherlands          | Euro                       | EUR  |
| New Zealand          | New Zealand Dollar         | NZD  |
| Nicaragua            | Cordoba Oro                | NIO  |
| Nigeria              | Naira                      | NGN  |
| North Korea          | North Korean Won           | KPW  |
| Norway               | Norwegian Krone            | NOK  |
| Oman                 | Rial Omani                 | OMR  |
| Pakistan             | Pakistan Rupee             | PKR  |
| Panama               | Balboa                     | PAB  |
| Papua New Guinea     | Kina                       | PGK  |
| Paraguay             | Guarani                    | PYG  |
| Peru                 | Sol                        | PEN  |
| Philippines          | Philippine Peso            | PHP  |
| Poland               | Zloty                      | PLN  |
| Portugal             | Euro                       | EUR  |
| Qatar                | Qatari Rial                | QAR  |
| Romania              | Romanian Leu               | RON  |
| Russia               | Russian Ruble              | RUB  |
| Saudi Arabia         | Saudi Riyal                | SAR  |
| Serbia               | Serbian Dinar              | RSD  |
| Singapore            | Singapore Dollar           | SGD  |
| Slovakia             | Euro                       | EUR  |
| Slovenia             | Euro                       | EUR  |
| South Africa         | Rand                       | ZAR  |
| South Korea          | Won                        | KRW  |
| Spain                | Euro                       | EUR  |
| Sri Lanka            | Sri Lanka Rupee            | LKR  |
| Sudan                | Sudanese Pound             | SDG  |
| Sweden               | Swedish Krona              | SEK  |
| Switzerland          | Swiss Franc                | CHF  |
| Syria                | Syrian Pound               | SYP  |
| Taiwan               | New Taiwan Dollar          | TWD  |
| Tajikistan           | Somoni                     | TJS  |
| Tanzania             | Tanzanian Shilling         | TZS  |
| Thailand             | Baht                       | THB  |
| Tonga                | Pa’anga                    | TOP  |
| Trinidad & Tobago    | Trinidad and Tobago Dollar | TTD  |
| Tunisia              | Tunisian Dinar             | TND  |
| Turkey               | Turkish Lira               | TRY  |
| Turkmenistan         | Turkmenistan New Manat     | TMT  |
| Uganda               | Uganda Shilling            | UGX  |
| Ukraine              | Hryvnia                    | UAH  |
| United Arab Emirates | UAE Dirham                 | AED  |
| United Kingdom       | Pound Sterling             | GBP  |
| United States        | US Dollar                  | USD  |
| Uruguay              | Peso Uruguayo              | UYU  |
| Uzbekistan           | Uzbekistan Sum             | UZS  |
| Venezuela            | Bolivar                    | VES  |
| Vietnam              | Dong                       | VND  |
| Yemen                | Yemeni Rial                | YER  |
| Zambia               | Zambian Kwacha             | ZMW  |
| Zimbabwe             | Zimbabwe Dollar (ZWL)      | ZWL  |

---

## Author

👤 **Rishav Tiwari**

* GitHub: [rishavtiwari22](https://github.com/rishavtiwari22)
* Email: [rishav@navgurukul.org](mailto:rishav@navgurukul.org)

