# Test cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the product
- Return: returns the product object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

- Before tests create `storage` object from the `productStorage` class with the default data

### Test 1: getProductsById with id: 1,2,3

#### id 2 returns only one product object in the array

```js
storage.getsById("vaccum cleaner");
```

returns:

```json
{
  "id": 2,
  "model": "Beast II",
  "type": "vacuum cleaner",
  "accessories": ["bags", "filter set", "delux brush set"],
  "price": 99,
  "extras": [
    {
      "name": "manual",
      "price": 15
    },
    {
      "name": "warranty",
      "price": 10
    }
  ]
}
```

#### if the id doesn't exist returns an empty array

```js
register.getById("x");
```

returns []

### Test 2: if type is missing throws an exception

```js
register.getById();
```

throws an exception `'missing parameter'`
