const Products = require('../models/products.js');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('products Model', () => {

  it ('can post a new category', () => {
    let obj = { name: 'Soap', description: 'Cleansing product', price: 4.88};
    let products = new Products();
    products.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it ('can get() a category', () => {
    let obj = { name: 'Soap', description: 'Cleansing product', price: 4.88};
    let products = new Products();
    products.post(obj)
      .then(record => {
        return products.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
});