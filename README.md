# [Meter API](https://meterapi.io)
[Meter](https://meterapi.io) is a single API to access energy, water and internet suppliers in the UK.
This module works both in node and browser environments.

For more detailed information check out [our docs](https://meterapi.io/docs).


## Installation

### Node
use npm
`npm install meterapi --save`

or yarn
`yarn add meterapi`

### Browser
Add this to your head:

`<script src="https://meterapi.io/lib/meterapi.js"></script>`

## Configuration
```js
const MeterApi = require('meterapi') // omit this line if you used the script tag
const meter = MeterApi({
	clientId: 'your-client-id', // go to https://meterapi.io to get a client id and secret
	clientSecret: 'your-client-secret'
})
```

## Usage
For more detailed information check out [our docs](https://meterapi.io/docs).

### Creating a Supplier Account
```js
meter.newAccount({
	"supplierId": "thames-water",
	"name": "Frank Osborne",
	"address": {
		"name": "Frank Osborne",
		"line1": "Flat 12",
		"line2": "79 Holgate Road",
		"town": "Ramsgate",
		"postcode": "CT11 6GX"
	},
	"phoneNumber": "07700900420",
	"billingInfo": {
		"accountHolderName": "Frank Osborne",
		"accountNumber": "55779911",
		"sortCode": "200000"
	}
})
	.then(data => {
		const { accountId, token } = data.createAccount
		console.log(`created account with id "${accountId}" and token "${token}"`)
	})
	.catch(error => {
		console.error('something went wrong', error)
	})
```

### Connecting an Existing Supplier Account
```js
meter.connectAccount({
	"supplierId": "thames-water",
	"redirectUrl": "https://yourapp.com/meterapi?sessionId=blah"
})
	.then(data => {
		const { connectionUrl } = data.connectAccount
		console.log(`connect account using this url: ${connectionUrl}`)
	})
	.catch(error => {
		console.error('something went wrong', error)
	})
```

### Accessing a Connected Account
```js
meter.getAccount({ accountId: 'thames-water', token: 'test' })
	.then(data => {
		const account = data.getAccount
		console.log(`got account: ${JSON.stringify(account, null, '\t')}`)
	})
	.catch(error => {
		console.error('something went wrong', error)
	})
```

### Transferring a Connected Account
```js
meter.transferAccount({
	accountId: 'britishgas', 
	token: 'test', 
	supplierId: 'eon',
})
	.then(data => {
		const account = data.transferAccount
		console.log(`initiated account transfer: ${JSON.stringify(account, null, '\t')}`)
	})
	.catch(error => {
		console.error('something went wrong', error)
	})
```

### List Suppliers
```js
meter.getSuppliers()
	.then(suppliers => {
		suppliers.forEach(supplier => {
			console.log(`found supplier: ${supplier.name}`)
		})
	})
	.catch(error => {
		console.error('something went wrong', error)
	})
```