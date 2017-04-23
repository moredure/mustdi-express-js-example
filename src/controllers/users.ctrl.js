const $ = require('react-autobind');

/**
 * UsersController class
 */
class UsersController {
  /**
   * UsersController
   * @singleton
   * @param {ServerCloser} router some router
   * @param {UserMongo} user model
   * @param {UserPostgres} user model
   * @param {Logger} logger logger
   */
  constructor(serverCloser, UserMongo, UserPostgres, logger) {
    this._serverCloser = serverCloser;
    this._UserMongo = UserMongo;
    this._UserPostgres = UserPostgres;
    this._logger = logger;
    $(this);
  }
  /**
   * All users
   * @param  {Object} req express request
   * @param  {Object} res express response
   * @param  {Function} next example
   */
  async index(req, res, next) {
    try {
      const users = await this._UserMongo.all();
      const usersPostgres = await this._UserPostgres.all();
      this._logger.log('All users', users.length);
      res.json({users,usersPostgres});
    } catch(e) {
      return next(e);
    }
  }
  /**
   * Get some users example
   * @param  {Object} req express request
   * query:
   * {
   *   name: String
   * }
   * @param  {Object} res express response
   * @param  {Function} next example
   */
  async create(req, res, next) {
    try {
      const user = await this._UserMongo.new(req.query.name);
      const userPostgres = await this._UserPostgres.new(req.query.name);
      this._logger.log('Created users', user, userPostgres);
      return res.json({user,userPostgres});
    } catch(e) {
      return next(e);
    }
  }
}

module.exports = UsersController;
