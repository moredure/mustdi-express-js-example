/**
 * MongoDb class
 */
class MongoDb {
  /**
   * MongoDb constructor
   * @singleton
   * @method createConnection
   * @param {Config} config config
   * @param {DiExternalDependency} bluebird bluebird
   * @param {DiExternalDependency} mongoose mongoose
   * @return mongoose driver
   */
  constructor(config, bluebird, mongoose) {
    this._config = config;
    this._bluebird = bluebird;
    this._mongoose = mongoose;
  }
  /**
   * [factoryMethod description]
   * @return {[type]} [description]
   */
  createConnection() {
    this._mongoose.Promise = this._bluebird;
    const MONGO_URL = this._config.get('mongoUrl');
    return this._mongoose.createConnection(MONGO_URL);
  }
}

module.exports = MongoDb;
