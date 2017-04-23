const $ = require('react-autobind');

/**
 * OtherUsersController class
 */
class OtherUsersController {
  /**
   * OtherUsersController
   * @singleton
   * @param {UserPostgres} user model
   * @param {Logger} logger logger
   */
  constructor(UserPostgres, logger) {
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
      const users = await this._UserPostgres.all();
      this._logger.log('All users', users.length);
      res.json(users);
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
      const user = await this._UserPostgres.new(req.query.name);
      this._logger.log('Created users', user);
      return res.json(user);
    } catch(e) {
      return next(e);
    }
  }
}

module.exports = OtherUsersController;
