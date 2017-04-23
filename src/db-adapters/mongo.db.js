const mongoose = require('mongoose');
const bluebird = require('bluebird');

/**
 * MongoDb class
 */
class MongoDb {
  /**
   * MongoDb constructor
   * @singleton
   * @param {Config} config config
   * @return mongoose driver
   */
  constructor(config) {
    mongoose.Promise = bluebird;
    return mongoose.createConnection(config.get('mongoUrl'));
  }
}

module.exports = MongoDb;
