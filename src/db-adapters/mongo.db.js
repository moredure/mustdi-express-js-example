/**
 * MongoDb class
 */
class MongoDb {
  /**
   * MongoDb constructor
   * @singleton
   * @param {DiExternalDependency} mongoose mongoose
   * @param {DiExternalDependency} bluebird bluebird
   * @param {Config} config config
   * @return mongoose driver
   */
  constructor(mongoose, bluebird, config) {
    mongoose.Promise = bluebird;
    return mongoose.createConnection(config.get('mongoUrl'));
  }
}

module.exports = MongoDb;
