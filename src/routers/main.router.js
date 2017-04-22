/**
 * Router class
 */
class Router {
  /**
   * Router
   * @singleton
   * @param {DiExternalDependency} express express
   * @param {UsersController} usersCtrl usersCtrl
   * @param {EventsController} eventsCtrl eventsCtrl
   */
  constructor(express, usersCtrl, eventsCtrl) {
    this._express = express;
    this._usersCtrl = usersCtrl;
    this._eventsCtrl = eventsCtrl;
  }
  /**
   * Build router
   * @return {Router} express router
   */
  build() {
    const router = new this._express.Router();
    router.get('/users', this._usersCtrl.index);
    router.post('/users', this._usersCtrl.create);
    router.get('/close', this._eventsCtrl.close);
    return router;
  }
}

module.exports = Router;
