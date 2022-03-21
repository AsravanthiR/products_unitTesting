## **getPriceWithoutExtras(id)**

Returns the price with out extras

- Parameters: id of the product
- Return: The price of the product not including the price of the extras
- if no product with the given number is found throws an exeption `nothing found with given id`

### Test 1: Returns the price without extras

```js
getPriceWithoutExtras(1);
```

[
{
"id": 1,
"model": "Future 2025",
"type": "moccamaster",
"accessories": ["cleaning brush", "coffee cup"],
"price": 99
]

### Test 2: if no product with the given number is found throws an exeption `nothing found with given id`

```js
getPriceWithoutExtras(22);
```

throws an exeption `nothing found with given id`

### Test 3: if type is missing throws an exception

```js
register.getPriceWithoutExtras();
```

throws an exception `'missing parameter'`
