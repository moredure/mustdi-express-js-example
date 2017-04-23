/**
 * UserMongo class
 */
class UserMongo {
  /**
   * UserMongo constructor
   * @singleton
   * @method createModel
   * @param {MongoDb} db db
   * @param {DiExternalDependency} mongoose mongoose
   * @return {UserMongo} model
   */
  constructor(db, {Schema}) {
    this._db = db;
    this._Schema = Schema;
  }
  /**
   * [createModel description]
   * @return {[type]} [description]
   */
  createModel() {
    const userSchema = new this._Schema({
      name: {
        type: String,
        required: true,
      },
    });
    userSchema.statics.all = this.all;
    userSchema.statics.new = this.new;
    return this._db.model(UserMongo.name, userSchema);
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
