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
   * [index description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
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
  /**
   * [close description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   */
  close(req, res) {
    this._serverCloser.emit('close');
    res.json({event: 'CLOSED'});
  }
}

module.exports = UsersController;
