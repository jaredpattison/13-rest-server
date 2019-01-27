'use strict';

const categoriesModel = require('./categories-schema.js');

class Categories {

  constructor() {}

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return categoriesModel.find(queryObject);
  }
  
  post(entry) {
    let newRecord = new categoriesModel(entry);
    return newRecord.save();
  }

  put(_id, entry) {
    return categoriesModel.findOneAndReplace({_id}, {entry});
  }

  delete(_id) {
    return categoriesModel.deleteOne({_id});
  }
}

module.exports = Categories;
