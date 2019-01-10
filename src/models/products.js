'use strict';

const uuid = require('uuid/v4');

const productsModel = require('./products-schema.js')


class Products {

  constructor() {}

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return productsModel.find(queryObject);
  }
  
  post(entry) {
    let newRecord = new productsModel(entry);
    if(this.sanitize()) {return newRecord.save()};
  }

  put(_id, entry) {
    return productsModel.findOneAndReplace({_id}, {entry});
  }

  delete(_id) {
    return productsModel.deleteOne({_id});
  }

  sanitize(entry) {

    let valid = true;
    let record = {};

    for(let key in productsModel) {
      if(schema[key].required) {
        if(entry[key]) {
          record[key] = entry[key];
        }
        else {
          valid = false;
        }
      }
      else {
        record[key] = entry[key];
      }
    }
    return valid ? true : false;
  }
}

module.exports = Products;
