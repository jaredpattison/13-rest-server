'use strict';

const productsModel = require('./products-schema.js');

class Products {

  constructor() {}

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return productsModel.find(queryObject);
  }
  
  post(entry) {
    let newRecord = new productsModel(entry);
    return newRecord.save();
  }

  put(_id, entry) {
    return productsModel.findOneAndReplace({_id}, {entry});
  }

  delete(_id) {
    return productsModel.deleteOne({_id});
  }
}

module.exports = Products;
