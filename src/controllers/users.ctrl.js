/**
 * UsersController class
 */
class UsersController {
  /**
   * UsersController
   * @singleton
   * @param {ServerCloser} router some router
   * @param {User} user model
   * @param {DiExternalDependency} $ react-autobind
   * @param {Logger} logger logger
   */
  constructor(serverCloser, User, $, logger) {
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
  create(req, res, next) {
    this._User
      .create(req.query)
      .then((user) => {
        this._logger.log('Created user', user);
        return res.json(user);
      })
      .catch(next);
  }
  /**
   * All users
   * @param  {Object} req express request
   * @param  {Object} res express response
   * @param  {Function} next example
   */
  async index(req, res, next) {
    try {
      let users = await this._User.find({});
      this._logger.log('All users', users);
      res.json(users);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = UsersController;
