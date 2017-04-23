/**
 * ExpressApplication class
 */
class ExpressApplication {
  /**
   * ExpressApplication
   * @singleton
   * @method createApplication
   * @param {Router} router some router
   * @param {DiExternalDependency} express express
   */
  constructor(router, express) {
    this._router = router;
    this._express = express;
  }
  /**
   * Start server
   */
  createApplication() {
    const app = this._express();
    app.use('/', this._router);
    if (app.get('env') === 'production') {
      const helmet = require('helmet');
      app.use(helmet());
    }
    return app;
  }
}

module.exports = ExpressApplication;
