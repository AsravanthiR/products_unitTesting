### **getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the product

- Parameters: id of the product to be searched
- Return: the total price of extras. If no extras is found returns 0
- if no product with the given number is found throws an exeption `nothing found with given id`

### Test 1: if type is missing throws an exception

```js
register.getPriceOfTheExtras();
```

throws an exception `'missing parameter'`

### Test 2:Return the total price of extras

```js
register.getPriceOfTheExtras(2);
```

{"extras":[{
"price": 10
}]
}

### Test 2: if no product with the given number is found throws an exeption `nothing found with given id`

```js
register.getPriceOfTheExtras(22);
```

throws an exeption `nothing found with given id`
