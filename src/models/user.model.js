/**
 * User class
 */
class User {
  /**
   * User constructor
   * @singleton
   * @param {MongoDb} db db
   * @return mongoose driver
   */
  constructor(db) {
    return db.model(User.name, {
      name: String,
    });
  }
}

module.exports = User;
