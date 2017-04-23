/**
 * PostgresDb class
 */
class PostgresDb {
  /**
   * PostgresDb constructor
   * @singleton
   * @method createConnection
   * @param {Config} config config
   * @param {DiExternalDependency} pgPromise pg-promise
   * @param {DiExternalDependency} bluebird bluebird
   * @return mongoose driver
   */
  constructor(config, pgPromise, bluebird) {
    this._config = config;
    this._pgPromise = pgPromise;
    this._bluebird = bluebird;
  }
  /**
   * [factoryMethod description]
   * @return {[type]} [description]
   */
  createConnection() {
    const pgp = this._pgPromise({promiseLib: this._bluebird});
    const POSTGRES_URL = this._config.get('postgresUrl');
    return pgp(POSTGRES_URL);
  }
}

module.exports = PostgresDb;
