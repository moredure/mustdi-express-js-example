const express = require('express');

/**
 * Router class
 */
class Router {
  /**
   * Router
   * @singleton
   * @param {UsersController} usersCtrl usersCtrl
   * @param {EventsController} eventsCtrl eventsCtrl
   * @param {ErrorsController} errorsCtrl errorsCtrl
   */
  constructor(usersCtrl, eventsCtrl, errorsCtrl) {
    this._usersCtrl = usersCtrl;
    this._eventsCtrl = eventsCtrl;
    this._errorsCtrl = errorsCtrl;
  }
  /**
   * Build router
   * @return {Router} express router
   */
  build() {
    const router = new express.Router();
    router.get('/users', this._usersCtrl.index);
    router.post('/users', this._usersCtrl.create);
    router.get('/close', this._eventsCtrl.close);
    router.use(this._errorsCtrl.error);
    return router;
  }
}

module.exports = Router;
