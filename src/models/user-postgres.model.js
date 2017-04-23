/**
 * UserPostgres class
 */
class UserPostgres {
  /**
   * UserPostgres constructor
   * @singleton
   * @param {PostgresDb} db db
   * @return {UserPostgres} model
   */
  constructor(db) {
    this._db = db;
  }
  /**
   * Create new user
   * @param  {String} name [description]
   * @return {Promise} new user
   */
  save(name) {
    return this._db.one(`
      INSERT INTO users(name) VALUES (\${name}) RETURNING id, name;
    `, {name});
  }
  /**
   * Get all users
   * @return {Promise} all users
   */
  all() {
    return this._db.manyOrNone(`
      SELECT * FROM users;
    `);
  }
}

module.exports = UserPostgres;
