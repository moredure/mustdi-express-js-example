/**
 * Router class
 */
class Router {
  /**
   * Router
   * @singleton
   * @method router
   * @param {UsersController} usersCtrl usersCtrl
   * @param {EventsController} eventsCtrl eventsCtrl
   * @param {ErrorsController} errorsCtrl errorsCtrl
   * @param {OtherUsersController} otherUsersCtrl otherUsersCtrl
   * @param {DiExternalDependency} express express
   */
  constructor(usersCtrl, eventsCtrl, errorsCtrl, otherUsersCtrl, express) {
    this._usersCtrl = usersCtrl;
    this._eventsCtrl = eventsCtrl;
    this._errorsCtrl = errorsCtrl;
    this._otherUsersCtrl = otherUsersCtrl;
    this._express = express;
  }
  /**
   * Build router
   * @return {Object} express router
   */
  router() {
    const router = new this._express.Router();
    router.get('/users', this._usersCtrl.index);
    router.post('/users', this._usersCtrl.create);
    router.get('/other-users', this._otherUsersCtrl.index);
    router.post('/other-users', this._otherUsersCtrl.create);
    router.get('/close', this._eventsCtrl.close);
    router.use(this._errorsCtrl.error);
    return router;
  }
}

module.exports = Router;
