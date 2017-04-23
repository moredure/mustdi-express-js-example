/**
 * UsersController class
 */
class UsersController {
  /**
   * UsersController
   * @singleton
   * @param {UserMongo} user model
   * @param {Logger} logger logger
   * @param  {DiExternalDependency} $ react-autobind
   */
  constructor(UserMongo, logger, $) {
    this._UserMongo = UserMongo;
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
      const user = await this._UserMongo.new(req.query.name);
      this._logger.log('Created users', user);
      return res.json(user);
    } catch(e) {
      return next(e);
    }
  }
}

module.exports = UsersController;
