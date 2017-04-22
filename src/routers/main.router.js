/**
 * Router class
 */
class Router {
  /**
   * Router
   * @singleton
   * @param {DiExternalDependency} express express
   * @param {UsersController} usersCtrl usersCtrl
   */
  constructor(express, usersCtrl) {
    this._express = express;
    this._usersCtrl = usersCtrl;
  }
  /**
   * Build router
   * @return {Router} express router
   */
  build() {
    let router = new this._express.Router();
    router.get('/users', this._usersCtrl.getUsers);
    return router;
  }
}

module.exports = Router;
