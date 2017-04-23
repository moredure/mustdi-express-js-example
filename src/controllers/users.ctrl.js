const $ = require('react-autobind');

/**
 * UsersController class
 */
class UsersController {
  /**
   * UsersController
   * @singleton
   * @param {ServerCloser} router some router
   * @param {User} user model
   * @param {Logger} logger logger
   */
  constructor(serverCloser, User, logger) {
    this._serverCloser = serverCloser;
    this._User = User;
    this._logger = logger;
    $(this);
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
      const user = await this._User.new(req.query.name);
      this._logger.log('Created user', user);
      return res.json(user);
    } catch(e) {
      return next(e);
    }
  }
  /**
   * All users
   * @param  {Object} req express request
   * @param  {Object} res express response
   * @param  {Function} next example
   */
  async index(req, res, next) {
    try {
      let users = await this._User.all();
      this._logger.log('All users', users.length);
      res.json(users);
    } catch(e) {
      return next(e);
    }
  }
}

module.exports = UsersController;
