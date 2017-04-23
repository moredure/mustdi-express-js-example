const {Schema} = require('mongoose');

/**
 * User class
 */
class User {
  /**
   * User constructor
   * @singleton
   * @param {MongoDb} db db
   * @return {Mongoose} driver
   */
  constructor(db) {
    const userSchema = new Schema({
      name: {
        type: String,
        required: true,
      },
    });
    userSchema.statics.all = this.all;
    userSchema.statics.new = this.new;
    return db.model(User.name, userSchema);
  }
  /**
   * Create new user
   * @param  {String} name [description]
   * @return {Promise} new user
   */
  new(name) {
    return this.model(User.name).create({name});
  }
  /**
   * Get all users
   * @return {Promise} all users
   */
  all() {
    return this.model(User.name).find({});
  }
}

module.exports = User;
