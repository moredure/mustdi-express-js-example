const pgPromise = require('pg-promise');
const bluebird = require('bluebird');

/**
 * PostgresDb class
 */
class PostgresDb {
  /**
   * PostgresDb constructor
   * @singleton
   * @param {Config} config config
   * @return mongoose driver
   */
  constructor(config) {
    const pgp = pgPromise({promiseLib: bluebird});
    return pgp(config.get('postgresUrl'));
  }
}

module.exports = PostgresDb;
