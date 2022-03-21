# Test cases

## Constructor

### **constructor (data)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

#### Test 1: object created with given data

```js
new prodcutStorage(jsonData);
```

test if the inner field of the created object has the same value as given as parameter. Parameter `jsondata`is the json array from the default file `products.json`.

#### Test 2: missing parameter throws an exception

```js
new productStorage();
```

this will throw an exception `'product data missing'`
