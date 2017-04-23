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
    this.db = db;
  }
  /**
   * Create new user
   * @param  {String} name [description]
   * @return {Promise} new user
   */
  new(name) {
    return this.db.one(`
      INSERT INTO users(name) VALUES (\${name}) RETURNING id, name;
    `, {name});
  }
  /**
   * Get all users
   * @return {Promise} all users
   */
  all() {
    return this.db.manyOrNone(`
      SELECT * FROM users;
    `);
  }
}

module.exports = UserPostgres;
