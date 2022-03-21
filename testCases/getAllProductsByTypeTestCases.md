# Test cases

## **getAllProductsByType(type)**

Returns an array of product objects of given type

- Parameters: type of the product to be searched
- Returns an array of product objects of given type. If no product of given type is found, returns an empty array.
- If a parameter `type` is missing, an exeption `'missing parameter'` is thrown.

Before tests create `storage` -object from the `productStorage` class with the default data

### Test 1: getAllProductsByType with types: moccamaster, vaccum cleaner, radio

#### type moccamaster returns only one object in the array

```js
storage.getAllProductsByType("moccamaster");
```

returns:

```json
[
  {
    "id": 1,
    "model": "Future 2025",
    "type": "moccamaster",
    "accessories": ["cleaning brush", "coffee cup"],
    "price": 99,
    "extras": [
      {
        "name": "coffee",
        "price": 15
      },
      {
        "name": "spoon",
        "price": 10
      },
      {
        "name": "color gold",
        "price": 100
      }
    ]
  }
]
```

#### if type doesn't exist returns an empty array

```js
register.getAllProductsByType("x");
```

returns []

### Test 2: if type is missing throws an exception

```js
register.getAllProductsByType();
```

throws an exception `'missing parameter'`
