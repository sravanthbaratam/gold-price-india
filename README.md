# gold-price-india

[![npm (scoped)](https://img.shields.io/npm/v/@sravanthbaratam/gpi.svg)](https://www.npmjs.com/package/@sravanthbaratam/gpi)

[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@sravanthbaratam/gpi.svg)](https://www.npmjs.com/package/@sravanthbaratam/gpi)

Removes all spaces from a string.

## Install

```
$ npm install @sravanthbaratam/gpi
```

## Usage

```js
//under development : current scenario returns only a string array 
// next version will return dictionary 
const gpi = require('@sravanthbaratam/gpi')

async function pak(){
    let res = await gpi();
    console.log(res);
}
//=> "10g of 24k gold (99.9%): 51,550 INRHyderabad, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,520 INRBengaluru, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,570 INRChennai, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,545 INRVisakhapatnam, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,700 INRMumbai, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,550 INRBhopal, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,600 INRCoimbatore, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,520 INRMadurai, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,575 INRKochi, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,660 INRAhmedabad, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,560 INRKanpur, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,580 INRLucknow, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,630 INRJaipur, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,550 INRFaridabad, 23 Dec 2020
//=>  10g of 24k gold (99.5%): 51,325 INRKolkata, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,500 INRGurugram, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,610 INRDelhi, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,525 INRMeerut, 23 Dec 2020
//=>  10g of 24k gold (99.9%): 51,550 INRHyderabad, 23 Dec 2020"
```
