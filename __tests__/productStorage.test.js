"use strict";

const productStorage = require("../productStorage");
const products = require("../products.json");

// describe("Testing  constructor", () => {
//   test("Test 2: missing parameter throws an exception", () => {
//     expect(() => new productStorage()).toThrow("product data missing");
//   });
// });

// describe("getById(id)", () => {
//   const storage = new productStorage(products);
//   describe("Test 1: get product with id from default data", () => {
//     const testData = [
//       [
//         1,
//         {
//           id: 1,
//           model: "Future 2025",
//           type: "moccamaster",
//           accessories: ["cleaning brush", "coffee cup"],
//           price: 99,
//           extras: [
//             {
//               name: "coffee",
//               price: 15,
//             },
//             {
//               name: "spoon",
//               price: 10,
//             },
//             {
//               name: "color gold",
//               price: 100,
//             },
//           ],
//         },
//       ],
//       [
//         2,
//         {
//           id: 2,
//           model: "Beast II",
//           type: "vacuum cleaner",
//           accessories: ["bags", "filter set", "delux brush set"],
//           price: 99,
//           extras: [
//             {
//               name: "manual",
//               price: 15,
//             },
//             {
//               name: "warranty",
//               price: 10,
//             },
//           ],
//         },
//       ],
//       [
//         3,
//         {
//           id: 3,
//           model: "MaxEffect 2000",
//           type: "radio",
//           accessories: [],
//           price: 29,
//           extras: [],
//         },
//       ],
//     ];

//     test.each(testData)("getById(%s) return %p", (idNumber, expectedObject) => {
//       expect(storage.getById(idNumber)).toEqual(expectedObject);
//     });
//   });

//   test("Test 2: get product with id that does not exist", () => {
//     expect(storage.getById(5)).toBeNull();
//   });

//   test("Test 3: get product with missing parameter", () => {
//     expect(() => storage.getById()).toThrow("missing parameter");
//   });
// });

// describe("getAllIdsByModel(value)", () => {
//   const storage = new productStorage(products);
//   describe("Test 1: get ids of an existing model with default data", () => {
//     const existingTestValues = [
//       {
//         id: 1,
//         model: "Future 2025",
//       },
//       {
//         id: 2,
//         model: "Beast II",
//       },
//       {
//         id: 3,
//         model: "MaxEffect 2000",
//       },
//     ];
//     test.each(existingTestValues)(
//       "testing: %s return %s",
//       (modelValue, expectedId) => {
//         expect(storage.getAllIdsByModel(modelValue)).toEqual(expectedId);
//       }
//     );
//   });

//   test("Test 2: get ids of a non existing model, return empty array", () => {
//     expect(storage.getAllIdsByModel("x")).toEqual([]);
//   });

//   test("Test 3: get ids by model with no parameter throws an error 'missing parameter'", () => {
//     expect(() => storage.getAllIdsByModel()).toThrow("missing parameter");
//   });
// });

// describe("testing method getAllProductTypes", () => {
//   test("Test 1: use default data", () => {
//     const storage = new productStorage(products);
//     expect(storage.getAllProductTypes()).toEqual([
//       "moccamaster",
//       "vacuum cleaner",
//       "radio",
//     ]);
//   });

//   test("Test 2: get ids of a non existing model, return empty array", () => {
//     const storage = new productStorage(products);

//     expect(storage.getAllIdsByModel("x")).toEqual([]);
//   });
// });

// describe(" getAllProductsByType(type)", () => {
//   const storage = new productStorage(products);
//   test("Test 1: get all product objects of given type from default data (only one product per type existing)", () => {
//     expect(storage.getAllProductsByType("vacuum cleaner")).toEqual([
//       {
//         id: 2,
//         model: "Beast II",
//         type: "vacuum cleaner",
//         accessories: ["bags", "filter set", "delux brush set"],
//         price: 99,
//         extras: [
//           {
//             name: "manual",
//             price: 15,
//           },
//           {
//             name: "warranty",
//             price: 10,
//           },
//         ],
//       },
//     ]);
//   });

//   test("Test 2: no product of given type is found", () => {
//     expect(storage.getAllProductsByType("x")).toEqual([]);
//   });

//   test("Test 3: get product with missing parameter", () => {
//     expect(() => storage.getAllProductsByType()).toThrow("missing parameter");
//   });
// });

// describe("hasAccessories(id)", () => {
//   const storage = new productStorage(products);
//   test("Test 1: parameter missing, return false", () => {
//     expect(storage.hasAccessories()).toBe(false);
//   });

//   test("Test 2: no product with given id", () => {
//     expect(storage.hasAccessories(42)).toBeNull();
//   });

//   test("Test 3: product is found and has accessories, return `true`", () => {
//     expect(storage.hasAccessories(1)).toBe(true);
//   });

//   test("Test 4: product is found and does not have accessories, return `false`", () => {
//     expect(storage.hasAccessories(3)).toBe(false);
//   });
// });

// describe(" getProductAccessories(id)", () => {
//   const storage = new productStorage(products);
//   test("Test 1: parameter missing, throw exception", () => {
//     expect(() => storage.getProductAccessories()).toThrow("missing parameter");
//   });

//   describe("Test 2: get product accessories from default data", () => {
//     const testValues = [
//       [productId, expectedAccessoriesArray][
//         (1, ["cleaning brush", "coffee cup"])
//       ],
//       [2, ["bags", "filter set", "delux brush set"]],
//       [3, []],
//     ];
//     test.each(testValues)(
//       "productId %s return %p",
//       (productId, expectedAccessoriesArray) => {
//         expect(storage.getProductAccessories(productId)).toEqual(
//           expectedAccessoriesArray
//         );
//       }
//     );
//   });
//});

describe(" getPriceWithoutExtras(id)", () => {
  const storage = new productStorage(products);
  test("Test 1: parameter missing, throw exception", () => {
    expect(() => storage.getPriceWithoutExtras()).toThrow("missing parameter");
  });

  test("Test 2: no product with the given id", () => {
    expect(() => storage.getPriceWithoutExtras(56)).toThrow(
      "nothing found with given id"
    );
  });

  describe("Test 3: price of product from default data", () => {
    const testValues = [
      {
        id: 1,
        model: "Future 2025",
        type: "moccamaster",
        accessories: ["cleaning brush", "coffee cup"],
        price: 99,
        extras: [
          {
            name: "coffee",
            price: 15,
          },
          {
            name: "spoon",
            price: 10,
          },
          {
            name: "color gold",
            price: 100,
          },
        ],
      },
      {
        id: 2,
        model: "Beast II",
        type: "vacuum cleaner",
        accessories: ["bags", "filter set", "delux brush set"],
        price: 99,
        extras: [
          {
            name: "manual",
            price: 15,
          },
          {
            name: "warranty",
            price: 10,
          },
        ],
      },
      {
        id: 3,
        model: "MaxEffect 2000",
        type: "radio",
        accessories: [],
        price: 29,
        extras: [],
      },
    ];
    test.each(testValues)(
      "product %s: price without extras is %p",
      (productId, expectedPrice) => {
        expect(storage.getPriceWithoutExtras(productId)).toEqual(expectedPrice);
      }
    );
  });
});

// describe(" getTotalPrice(id)", () => {
//   const storage = new productStorage(products);
//   test("Test 1: parameter missing, throw exception", () => {
//     expect(() => storage.getTotalPrice()).toThrow("missing parameter");
//   });

//   test("Test 2: no product with the given id", () => {
//     expect(() => storage.getTotalPrice(56)).toThrow(
//       "nothing found with given id"
//     );
//   });

//   describe("Test 3: total price of product with extras", () => {
//     const testValues = [
//       [1, 224],
//       [2, 124],
//       [3, 29],
//     ];
//     test.each(testValues)(
//       "product %s: total price with extras is %p",
//       (productId, expectedTotal) => {
//         expect(storage.getTotalPrice(productId)).toEqual(expectedTotal);
//       }
//     );
//   });
// });

// describe(" getPriceOfTheExtras(id)", () => {
//   const storage = new productStorage(products);
//   test("Test 1: parameter missing, throw exception", () => {
//     expect(() => storage.getPriceOfTheExtras()).toThrow("missing parameter");
//   });

//   test("Test 2: no product with the given id", () => {
//     expect(() => storage.getPriceOfTheExtras(56)).toThrow(
//       "nothing found with given id"
//     );
//   });

//   describe("Test 3: total price of extras", () => {
//     const testValues = [
//       [1, 125],
//       [2, 25],
//       [3, 0],
//     ];
//     test.each(testValues)(
//       "product %s: price of extras is %p",
//       (productId, expectedTotalExtra) => {
//         expect(storage.getPriceOfTheExtras(productId)).toEqual(
//           expectedTotalExtra
//         );
//       }
//     );
//   });
// });
