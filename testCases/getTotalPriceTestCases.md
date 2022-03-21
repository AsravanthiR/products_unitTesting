## **getTotalPrice(id)**

Returns the total price of the product including the total price of the extras

- Parameters: id of the product
- Return: The price of the product including the total price of the extras
- if no product with the given number is found throws an exeption `nothing found with given id`

### Test1: Returns the total price of the product including the total price of the extras

```js
getTotalPrice(2);
```

{
["price": 10]
}

### Test1:if no product with the given number is found throws an exeption `nothing found with given id`

```js
getTotalPrice(22);
```

throws an exeption `nothing found with given id`

### Test 3: if type is missing throws an exception

```js
register.getTotalPrice();
```

throws an exception `'missing parameter'`
