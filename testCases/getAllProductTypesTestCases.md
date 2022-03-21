# Test cases

## **getAllProductTypes()**

Returns an array of different product types.

- Parameters: none
- Return: Returns an array of different product types. If no types are found, returns an empty array. The type is added to the result array only once.
- Before tests create `storage` -object from the `productStorage` class with the default data

### Test 1: getAllProductTypes

returns all the objects available in the array

```js
storage.getAllProductTypes();
```

returns:
["moccamaster", "vacuum cleaner", "radio"]

#### if type doesn't exist returns an empty array

```js
register.getAllProductTypes("x");
```

returns []
