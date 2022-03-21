# Test cases

## **getAllIdsByModel(value)**

Returns all ids of the products matching the value of model

- Parameters: value of the property to be searched
- Return: Returns an array of product id where the products model matches the given value. If there is no match or parameter is missing, an empty array is returned.

- Before tests create `storage` -object from the `productStorage` class with the default data

### getAllIdsByModel("Beast II")

#### type Beast II returns id [2] in the array.

{
"id": 2,
"model": "Beast II",
"type": "vacuum cleaner",
"accessories": ["bags", "filter set","delux brush set"],
"price": 99,
"extras": [{
"name": "manual",
"price": 15
},
{
"name": "warranty",
"price": 10
}
]
}

### If there is no match or parameter is missing, an empty array is returned.

```js
register.getAllIdsByModel("x");
```

returns []
