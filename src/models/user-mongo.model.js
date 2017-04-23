const {Schema} = require('mongoose');

/**
 * UserMongo class
 */
class UserMongo {
  /**
   * UserMongo constructor
   * @singleton
   * @param {MongoDb} db db
   * @return {UserMongo} model
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
    return db.model(UserMongo.name, userSchema);
  }
  /**
   * Create new user
   * @param  {String} name [description]
   * @return {Promise} new user
   */
  new(name) {
    return this.model(UserMongo.name).create({name});
  }
  /**
   * Get all users
   * @return {Promise} all users
   */
  all() {
    return this.model(UserMongo.name).find({});
  }
}

module.exports = UserMongo;
