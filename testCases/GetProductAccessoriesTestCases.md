## **GetProductAccessories(id)**

Returns an array of product accessories. If none found, returns an empty array.

- Parameters: id of the product
- Return: returns accessories as an array

### Test 1: if type is missing throws an exception

```js
register.GetProductAccessories();
```

throws an exception `'missing parameter'`

### Test 2: if accessories does not exist returna an empty array

```js
GetProductAccessories(3);
```

returns []

### Test 2: type id returns accessories as an array

```js
GetProductAccessories(2);
```

["bags", "filter set","delux brush set"]
