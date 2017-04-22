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
   * @param  {Object}   req  example
   * @param  {Object}   res  example
   * @param  {Function} next example
   */
  getUsers(req, res, next) {
    this._User
      .create({name: 'Mark Tsukerberg'})
      .then((user) => {
        res.json(user);
        this._logger.log('Created user', user);
        this._serverCloser.emit('close');
      })
      .catch((x) => res.send(JSON.stringify(x)));
  }
}

module.exports = UsersController;
