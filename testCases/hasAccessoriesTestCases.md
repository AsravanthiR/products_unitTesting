## **hasAccessories(id)**

- Parameters: id of the product
- Return: returns true if the product has accessories else returns false. If parameter id is missing false is returned

### Test 1: if type is missing throws an exception

```js
register.hasAccessories();
```

throws an exception `'missing parameter'`
retrun false;

### Test 2: hasAccessories(2)

return true

### Test 3: hasAccessories(22)

return null

### Test 4: hasAccessories(3)

return false

Product found, but no accessories
