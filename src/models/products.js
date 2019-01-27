'use strict';

const productsModel = require('./products-schema.js');

/** Class representing a Product model */
class Products {

  /**
   * Products Model Constructor
   */
  constructor() {}

  /**
   * Retrieves one or more categories
   * @param {string} _id 
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return productsModel.find(queryObject);
  }
  
  /**
   * Create product
   * @param {object} entry - matches format of product schema
   */
  post(entry) {
    let newRecord = new productsModel(entry);
    return newRecord.save();
  }

  /**
   * Replaces product
   * @param {string} _id 
   * @param {object} entry 
   */
  put(_id, entry) {
    return productsModel.findOneAndReplace({_id}, {entry});
  }

  /**
   * Deletes product
   * @param {string} _id 
   */
  delete(_id) {
    return productsModel.deleteOne({_id});
  }
}

module.exports = Products;
