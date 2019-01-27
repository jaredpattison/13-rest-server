'use strict';

const categoriesModel = require('./categories-schema.js');

/** Class representing Category model*/
class Categories {

  /**
   * Categories Model Constructor
   */
  constructor() {}

  /**
   * Retrieves one or more categories
   * @param {string} _id 
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return categoriesModel.find(queryObject);
  }
  
  /**
   * Create category
   * @param {object} entry - matches the format of the schema
   */
  post(entry) {
    let newRecord = new categoriesModel(entry);
    return newRecord.save();
  }

  /**
   * Replaces category
   * @param {string} _id 
   * @param {object} entry - updated info
   * @returns{*}
   */
  put(_id, entry) {
    return categoriesModel.findOneAndReplace({_id}, {entry});
  }

  /**
   * Deletes category
   * @param {string} _id 
   */
  delete(_id) {
    return categoriesModel.deleteOne({_id});
  }
}

module.exports = Categories;
